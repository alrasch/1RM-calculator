import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/common.css';
import Input from '@material-ui/core/Input';
import './Calculators';
import { Epley, Brzycki, McGlothin, Lombardi, Mayhew, OConner, Wathen } from "./Calculators";

function App() {
	const [weight, setWeight] = useState(100);
	const [reps, setReps] = useState(5);
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.background
		},
	}));
	const classes = useStyles();

	return (
		<div className={classes.root} id={"calculator-collection"}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<h1>Your 1RM as estimated by various formulae</h1>

						<p>Source for the calculations:
							<a href={"https://en.wikipedia.org/wiki/One-repetition_maximum"}>
								Wikipedia article on one-repetition maximum
							</a>
						</p>
						<p>
							To use, fill in one of your accomplishments. The calculations are unit-agnostic, meaning it
							doesn't matter if you fill in a kg value or a pound value. The output will be in the same unit
							as your input.
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						Weight: <Input value={weight} type={"number"} onChange={e => setWeight(parseInt(e.target.value))}/>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						Reps: <Input value={reps} type={"number"} onChange={e => setReps(parseInt(e.target.value))} />
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to Epley</h3>
						{Epley(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to Brzycki</h3>
						{Brzycki(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to McGlothin</h3>
						{McGlothin(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to Lombardi</h3>
						{Lombardi(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to Mayhew</h3>
						{Mayhew(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<h3>According to OConner</h3>
						{OConner(weight, reps)}
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
					<h3>According to Wathen</h3>
					{Wathen(weight, reps)}
				</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
