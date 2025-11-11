// lib/leveling.ts
export type LevelMap = Record<number, number>;

export function getLevelFromGp(gp: number, levelMap: LevelMap): number {
  const levels = Object.keys(levelMap)
    .map(Number)
    .sort((a, b) => a - b);

  let currentLevel = levels[0];

  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const nextLevel = levels[i + 1];

    if (!nextLevel || gp < levelMap[nextLevel]) {
      currentLevel = level;
      break;
    }
  }

  return currentLevel;
}

export function getLevelInfo(gp: number, levelMap: LevelMap) {
  const level = getLevelFromGp(gp, levelMap);
  const gpStartLevel = levelMap[level];
  const gpToNext = levelMap[level + 1]; // might be undefined if at max level

  // fix: progress should be based on (gp - start)
  const percentageToNext =
    gpToNext != null
      ? ((gp - gpStartLevel) * 100) / (gpToNext - gpStartLevel)
      : 100;

  return { level, percentageToNext, gpToNext };
}
