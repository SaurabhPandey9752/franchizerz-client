import { useRef } from "react";
import styles from "../ReviewCard/ReviewCard.module.css";
import ReviewCard from "../ReviewCard/ReviewCard";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Reviews = ({ reviews }) => {
  const reviewsContainerRef = useRef(null);

  const scrollLeft = () => {
    reviewsContainerRef.current.scrollBy({
      top: 0,
      left: -300, // Adjust the value as per your requirement
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    reviewsContainerRef.current.scrollBy({
      top: 0,
      left: 300, // Adjust the value as per your requirement
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
          <p className={styles.mainHeadText}>User Reviews</p>
      </div>
      <div className={styles.subMainContainer}>
      <IconButton onClick={scrollLeft} sx={{ color: '#0096ff' }}>
        <ArrowBackIosIcon />
      </IconButton>
        <div className={styles.reviewCardSlider} ref={reviewsContainerRef}>
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
        <IconButton onClick={scrollRight} sx={{ color: '#0096ff' }}>
        <ArrowForwardIosIcon />
      </IconButton>
      </div>
      
    </div>
  );
};

export default Reviews;
