// lib/leveling.test.ts
import { describe, it, expect } from "vitest";
import { getLevelFromGp, getLevelInfo } from "../lib/leveling";

const levelMap = {
  1: 0,
  2: 100,
  3: 300,
};

describe("getLevelFromGp", () => {
  it("returns level 1 when GP is below level 2 threshold", () => {
    expect(getLevelFromGp(10, levelMap)).toBe(1);
    expect(getLevelFromGp(99, levelMap)).toBe(1);
  });

  it("returns level 2 when GP is between level 2 and 3 thresholds", () => {
    expect(getLevelFromGp(100, levelMap)).toBe(2);
    expect(getLevelFromGp(250, levelMap)).toBe(2);
  });

  it("returns highest level when GP is above all thresholds", () => {
    expect(getLevelFromGp(1000, levelMap)).toBe(3);
  });
});

describe("getLevelInfo", () => {
  it("returns correct percentage within a level", () => {
    // level 1 → 0..100
    const info = getLevelInfo(50, levelMap);
    expect(info.level).toBe(1);
    expect(Math.round(info.percentageToNext)).toBe(50);
    expect(info.gpToNext).toBe(50);
  });

  it("returns 0% at start of level", () => {
    const info = getLevelInfo(100, levelMap); // start of level 2 (100..300)
    expect(info.level).toBe(2);
    expect(info.percentageToNext).toBe(0);
  });

  it("returns 50% in the middle of a non-zero-start level", () => {
    // level 2 is 100..300 → span 200 → middle at 200
    const info = getLevelInfo(200, levelMap);
    expect(info.level).toBe(2);
    expect(Math.round(info.percentageToNext)).toBe(50);
    expect(Math.round(info.gpToNext)).toBe(100);
  });

  it("returns 100% if at or above the last level", () => {
    const info = getLevelInfo(999, levelMap);
    expect(info.level).toBe(3);
    expect(info.percentageToNext).toBe(100);
    expect(info.gpToNext).toBe(0);
  });
});
