
export const FeedbackStat = ({good, neutral, bad, total, percentage}) => {
	return(<div>
				<p>Good: {good}</p>
				<p>Neutral: {neutral}</p>
				<p>Bad: {bad}</p>
				{total > 0 && <p>Total: {total}</p>}
				{percentage > 0 && <p>Percentage: {percentage}</p>}
			</div>)   
}