// A curly, looping line along a quadratic curve: the HEYTEA-style "hey!" string.
// Returns an SVG path. loops = how many curls, r = curl radius (in SVG units).
type Pt = [number, number];

export function curlPath(p0: Pt, p1: Pt, p2: Pt, loops = 8, r = 7, steps = 24): string {
  const at = (u: number): Pt => {
    const a = (1 - u) * (1 - u);
    const b = 2 * (1 - u) * u;
    const c = u * u;
    return [a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1]];
  };
  const tangent = (u: number): Pt => {
    const x = 2 * (1 - u) * (p1[0] - p0[0]) + 2 * u * (p2[0] - p1[0]);
    const y = 2 * (1 - u) * (p1[1] - p0[1]) + 2 * u * (p2[1] - p1[1]);
    const len = Math.hypot(x, y) || 1;
    return [x / len, y / len];
  };
  const pts: string[] = [];
  const total = loops * steps;
  for (let i = 0; i <= total; i++) {
    const u = i / total;
    const s = (i / steps) * Math.PI * 2;
    const [bx, by] = at(u);
    const [tx, ty] = tangent(u);
    const [nx, ny] = [-ty, tx];
    // prolate cycloid: step back along the tangent while circling, so it loops
    const along = -r * Math.sin(s);
    const across = r * (1 - Math.cos(s));
    const x = bx + tx * along + nx * across;
    const y = by + ty * along + ny * across;
    pts.push(`${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(" ");
}
