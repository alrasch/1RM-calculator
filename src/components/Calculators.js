export function Epley(weight, reps) {
	return weight * (1 + (reps / 30))
}

export function Brzycki(weight, reps) {
	return weight * 36 / (37 - reps);
}

export function McGlothin(weight, reps) {
	return 100 * weight / (101.3 - (2.67123 * reps));
}

export function Lombardi(weight, reps) {
	return weight * Math.pow(reps, 0.10);
}

export function Mayhew(weight, reps) {
	return 100 * weight / (52.2 + (41.9 * Math.exp(-0.055 * reps)));
}

export function OConner(weight, reps) {
	return weight * (1 + (reps / 40));
}

export function Wathen(weight, reps) {
	return 100 * weight / (48.8 + (53.8 * Math.exp(-0.075 * reps)));
}
