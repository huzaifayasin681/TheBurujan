'use client'

import { submitReview } from "@/app/dashboard/actions"
import { useState } from "react"
import { Star } from "lucide-react"
import styles from "./ReviewForm.module.css"

export default function ReviewForm({ existingReview }: { existingReview?: any }) {
    const [rating, setRating] = useState(existingReview?.rating || 5)

    return (
        <form action={submitReview} className={styles.form}>
            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Rating</label>
                <div className={styles.ratingContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className={`${styles.star} ${star <= rating ? styles.active : ''}`}
                        >
                            <Star size={24} />
                        </button>
                    ))}
                </div>
                <input type="hidden" name="rating" value={rating} />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Your Review</label>
                <textarea
                    name="comment"
                    className={styles.textarea}
                    placeholder="Tell us about your experience..."
                    defaultValue={existingReview?.comment || ""}
                    required
                />
            </div>

            <button type="submit" className={styles.button}>
                {existingReview ? "Update Review" : "Submit Review"}
            </button>
        </form>
    )
}
