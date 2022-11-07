import { Box } from "components/utils/box.styled";
import React from "react";
import { FeedbackButton } from "./FeedbackCreateControl.styled";

export const FeedbackCreateControl = ({ onFeedback, choiceNames }) => {
    const choiceButton = choiceNames.map(name =>
        <FeedbackButton  key={name} type="button" onClick={() => onFeedback(name)}>{name.charAt(0).toUpperCase() + name.slice(1)}</FeedbackButton>)

        return (
            <Box display="flex" justifyContent="space-around">
                {choiceButton}
            </Box>
            )
}