export default function starsRender(rating: number): string {
  return `${(Math.round(rating) * 20).toString()}%`;
}
