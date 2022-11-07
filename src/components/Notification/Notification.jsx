import { Box } from 'components/utils/box.styled'
import {NotificationTitle} from './Notification.styled'

export const Notification = ({ message }) => {
    return (
        <Box padding="20px" textAlign="center">
            <NotificationTitle>{message}</NotificationTitle>
        </Box>
    )
}