import { getRandomBetween } from '$lib/utils/numbers';
import Matter from 'matter-js';

/**
 * Engine for rendering the Plinko game using [matter-js](https://brm.io/matter-js/).
 */
class PlinkoEngine {
  private canvas: HTMLCanvasElement;
  private rowCount: number;

  private engine: Matter.Engine;
  private render: Matter.Render;
  private runner: Matter.Runner;
  private pins: Matter.Body[] = [];

  static PIN_CATEGORY = 0x0001;
  static BALL_CATEGORY = 0x0002;

  static WIDTH = 760;
  static HEIGHT = 570;
  static PADDING_X = 52;
  static PADDING_Y = 36;

  /**
   * @param canvas The canvas element to render the game to.
   * @param rowCount Initial number of rows of pins.
   */
  constructor(canvas: HTMLCanvasElement, rowCount: number) {
    this.canvas = canvas;
    this.rowCount = rowCount;

    this.engine = Matter.Engine.create({
      timing: {
        timeScale: 1,
      },
    });
    this.render = Matter.Render.create({
      engine: this.engine,
      canvas: this.canvas,
      options: {
        width: PlinkoEngine.WIDTH,
        height: PlinkoEngine.HEIGHT,
        background: '#0f1728',
        wireframes: false,
      },
    });
    this.runner = Matter.Runner.create();
  }

  /**
   * Renders the game and starts the physics engine.
   */
  start() {
    const sensor = Matter.Bodies.rectangle(
      this.canvas.width / 2,
      this.canvas.height,
      this.canvas.width,
      10,
      {
        isSensor: true,
        isStatic: true,
      },
    );

    Matter.Composite.add(this.engine.world, [sensor]);

    this.renderPins();

    // Clean up balls after they hit the sensor at the bottom
    Matter.Events.on(this.engine, 'collisionStart', ({ pairs }) => {
      pairs.forEach(({ bodyA, bodyB }) => {
        if (bodyA === sensor) {
          Matter.Composite.remove(this.engine.world, bodyB);
        } else if (bodyB === sensor) {
          Matter.Composite.remove(this.engine.world, bodyA);
        }
      });
    });

    Matter.Render.run(this.render); // Renders the scene to canvas
    Matter.Runner.run(this.runner, this.engine); // Starts the simulation in physics engine
  }

  /**
   * Drops a new ball from the top with a random horizontal offset.
   */
  dropBall() {
    const ballOffsetRangeX = this.pinDistanceX * 0.8;
    const ballRadius = this.pinRadius * 2;

    const ball = Matter.Bodies.circle(
      getRandomBetween(
        this.canvas.width / 2 - ballOffsetRangeX,
        this.canvas.width / 2 + ballOffsetRangeX,
      ),
      0,
      ballRadius,
      {
        restitution: 0.45, // Bounciness
        friction: 0.01,
        frictionAir: 0.02,
        collisionFilter: {
          category: PlinkoEngine.BALL_CATEGORY,
          mask: PlinkoEngine.PIN_CATEGORY, // Collide with pins only, but not other balls
        },
        render: {
          fillStyle: '#ff0000',
        },
      },
    );
    Matter.Composite.add(this.engine.world, ball);
  }

  /**
   * Refreshes the game with a new number of rows.
   *
   * Does nothing if the new row count equals the current count.
   */
  updateRowCount(rowCount: number) {
    if (rowCount === this.rowCount) {
      return;
    }

    this.removeAllBalls();

    this.rowCount = rowCount;
    this.renderPins();
  }

  stop() {
    Matter.Render.stop(this.render);
    Matter.Runner.stop(this.runner);
  }

  /**
   * Gets the horizontal distance between each pin's center point.
   */
  get pinDistanceX(): number {
    const lastRowPinCount = 3 + this.rowCount - 1;
    return (this.canvas.width - PlinkoEngine.PADDING_X * 2) / (lastRowPinCount - 1);
  }

  private get pinRadius(): number {
    return (24 - this.rowCount) / 2;
  }

  /**
   * Renders the pins. Previous pins are removed before rendering new ones.
   */
  private renderPins() {
    const { PADDING_X, PADDING_Y, PIN_CATEGORY, BALL_CATEGORY } = PlinkoEngine;

    if (this.pins.length > 0) {
      Matter.Composite.remove(this.engine.world, this.pins);
      this.pins = [];
    }

    for (let row = 0; row < this.rowCount; ++row) {
      const rowY = PADDING_Y + ((this.canvas.height - PADDING_Y * 2) / (this.rowCount - 1)) * row;

      /** Horizontal distance between canvas left/right boundary and first/last pin of the row. */
      const rowPaddingX = PADDING_X + ((this.rowCount - 1 - row) * this.pinDistanceX) / 2;

      for (let col = 0; col < 3 + row; ++col) {
        const colX = rowPaddingX + ((this.canvas.width - rowPaddingX * 2) / (3 + row - 1)) * col;
        const pin = Matter.Bodies.circle(colX, rowY, this.pinRadius, {
          isStatic: true,
          render: {
            fillStyle: '#ffffff',
          },
          collisionFilter: {
            category: PIN_CATEGORY,
            mask: BALL_CATEGORY, // Collide with balls
          },
        });
        this.pins.push(pin);
      }
    }
    Matter.Composite.add(this.engine.world, this.pins);
  }

  /**
   * Remove all moving balls from the engine.
   */
  private removeAllBalls() {
    Matter.Composite.allBodies(this.engine.world).forEach((body) => {
      if (body.collisionFilter.category === PlinkoEngine.BALL_CATEGORY) {
        Matter.Composite.remove(this.engine.world, body);
      }
    });
  }
}

export default PlinkoEngine;