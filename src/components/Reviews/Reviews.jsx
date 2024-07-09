import styles from "../ReviewCard/ReviewCard.module.css"
import ReviewCard from "../ReviewCard/ReviewCard"
import ArrowLogo from "../../images/arrow.svg"
import StarRatings from "react-star-ratings"

const Reviews = ({ reviews }) => {
	//sample objects for customer reviews
	//function to return average rating value.
	var averageRating = (review) => {
		let sum = 0
		for (let i = 0; i < review.length; i++) {
			sum += review[i].rating
		}
		let r = sum / review.length
		return r
	}

	return (
		<div className={styles.mainContainer}>
			<div className={styles.subMainContainer}>
				<div className={styles.headerContainer}>
					<p className={styles.mainHeadText}>User Reviews</p>
					<button className={styles.userReviewLink}>
						<p className={styles.userReviewLinkText}>
							See all user reviews
						</p>
						<ArrowLogo className={styles.userReviewLinkLogo} />
					</button>
				</div>
				<div className={styles.mainRatingPanel}>
					<p className={styles.averageRatingText}>
						Average user rating:
					</p>
					<StarRatings
						rating={averageRating(reviews)}
						starRatedColor="gold"
						numberOfStars={5}
						name="rating"
						starDimension="20px"
						starSpacing="2px"
					/>
				</div>
				<div className={styles.reviewCardSlider}>
					{reviews.map((review, index) => (
						<ReviewCard
							ratings={review.rating}
							customerName={review.customerName}
							key={index}
							date={review.datePosted}
							reviewHead={review.reviewHeading}
							reviewText={review.reviewParagraph}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Reviews
