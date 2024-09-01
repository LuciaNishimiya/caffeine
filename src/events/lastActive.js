import moment from 'moment-timezone';
import dotenv from 'dotenv'
dotenv.config();
export default client => {
    function getFormattedTime() {
        return moment().tz(process.env.TIMEZONE || 'America/Asuncion').format(process.env.TIME_FORMAT || 'YYYY-MM-DD HH:mm:ss');
    }
    client.on('presenceUpdate', (oldPresence, newPresence) => {
        const user = newPresence.user;
        const newStatus = newPresence.status;
        const oldStatus = oldPresence?.status;
        if (oldStatus === newStatus) return;
        user.setNote(`${newStatus} ${getFormattedTime()}`);
        console.log(`${user.tag} ${newStatus} ${getFormattedTime()}`)
    });
};
