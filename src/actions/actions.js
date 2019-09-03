export const TIMES_CLICKED = "TIMES_CLICKED";

export function click() {
  return {
    type: TIMES_CLICKED,
    payload: true
  };
}
