import React, { useEffect, useRef, useState } from 'react';
import styles from './block.module.css';

const COLS = 6;
const ROWS = 10;
const BLOCK_SIZE = 40;
const colors = ["#1abc9c", "#e74c3c", "#9b59b6", "#f39c12", "#3498db", "#2ecc71", "#e67e22", "#8e44ad"];
const prompts = [
  "Great job",
  "Awesome move",
  "Keep it up",
  "Fantastic",
  "You're on fire",
  "Incredible",
  "Smooth move",
  "Brilliant",
  "Superb",
  "Well done",
  "Awesome",
  "Perfect"
];

const BlockRush = ({ sorecRef }) => {
  const canvasRef = useRef(null);
  const [message, setMessage] = useState('');
  const [internalScore, setInternalScore] = useState(0);
  const gridRef = useRef(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
  const fallingBlocksRef = useRef([]);
  const backgroundBoxesRef = useRef([]);
  const prevSorecRef = useRef(sorecRef.current);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackgroundBoxes();
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          if (gridRef.current[r][c]) {
            ctx.fillStyle = colors[gridRef.current[r][c].color];
            ctx.fillRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            ctx.strokeStyle = '#2c3e50';
            ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          }
        }
      }
    };

    const drawBlock = (block) => {
      ctx.fillStyle = colors[block.color];
      ctx.fillRect(block.x * BLOCK_SIZE, block.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(block.x * BLOCK_SIZE, block.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    };

    const canMoveBlock = (block, dx, dy) => {
      let newX = block.x + dx;
      let newY = block.y + dy;
      return newX >= 0 && newX < COLS && newY < ROWS && (newY < 0 || gridRef.current[newY][newX] === null);
    };

    const placeBlock = (block) => {
      if (block.y >= 0) {
        gridRef.current[block.y][block.x] = { color: block.color };
      }
    };

    const clearLines = () => {
      let linesToClear = [];
      for (let r = ROWS - 1; r >= 0; r--) {
        if (gridRef.current[r].every(cell => cell !== null)) {
          linesToClear.push(r);
        }
      }
      if (linesToClear.length > 0) {
        linesToClear.forEach(r => {
          gridRef.current.splice(r, 1);
          gridRef.current.unshift(Array(COLS).fill(null));
          createSparkEffect(r);
        });
        setTimeout(() => {
          if (sorecRef) {
            sorecRef.current += linesToClear.length;
          } else {
            setInternalScore(prevScore => prevScore + linesToClear.length);
          }
          showMessage(prompts[Math.floor(Math.random() * prompts.length)]);
        }, 500);
      }
    };

    const createSparkEffect = (row) => {
      const sparkCount = 50;
      const sparks = [];

      for (let i = 0; i < sparkCount; i++) {
        sparks.push({
          x: Math.random() * canvas.width,
          y: row * BLOCK_SIZE + BLOCK_SIZE / 2,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1
        });
      }

      function animateSparks() {
        ctx.globalCompositeOperation = 'lighter';
        sparks.forEach(spark => {
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
          ctx.fillStyle = spark.color;
          ctx.fill();

          spark.x += spark.vx;
          spark.y += spark.vy;
          spark.life -= 0.02;
          spark.radius *= spark.life;
        });
        ctx.globalCompositeOperation = 'source-over';

        if (sparks.some(spark => spark.life > 0)) {
          requestAnimationFrame(animateSparks);
        }
      }

      animateSparks();
    };

    const showMessage = (message) => {
      setMessage(message);
      setTimeout(() => setMessage(''), 1000);
    };

    const createBackgroundBox = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 2 + 1
    });

    const drawBackgroundBoxes = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      backgroundBoxesRef.current.forEach(box => {
        ctx.fillRect(box.x, box.y, box.size, box.size);
        box.y -= box.speed;
        if (box.y + box.size < 0) {
          Object.assign(box, createBackgroundBox());
        }
      });
    };

    const update = () => {
      fallingBlocksRef.current = fallingBlocksRef.current.filter(block => {
        if (canMoveBlock(block, 0, 1)) {
          block.y += 1;
          return true;
        } else {
          placeBlock(block);
          return false;
        }
      });

      drawGrid();
      fallingBlocksRef.current.forEach(drawBlock);
      clearLines();
    };

    // Initialize background boxes
    for (let i = 0; i < 50; i++) {
      backgroundBoxesRef.current.push(createBackgroundBox());
    }

    const intervalId = setInterval(update, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (sorecRef.current > prevSorecRef.current) {
      handleDropClick();
      prevSorecRef.current = sorecRef.current;
    }
  }, [sorecRef.current]);

  const handleDropClick = () => {
    const blocksToDrop = 3;
    for (let i = 0; i < blocksToDrop; i++) {
      const newBlock = {
        x: Math.floor(Math.random() * COLS),
        y: 0,
        color: Math.floor(Math.random() * colors.length)
      };
      if (newBlock.y === 0 && gridRef.current[newBlock.y][newBlock.x] === null) {
        fallingBlocksRef.current.push(newBlock);
      }
    }
  };

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.gameContainer}>
        <canvas ref={canvasRef} width={240} height={400} className={styles.gameCanvas} />
        <div className={styles.score}>Score: {sorecRef.current}</div>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </div>
  );
};

export default BlockRush;
