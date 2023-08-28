import humanizeDuration from "humanize-duration";

export default function getCreatedString(dateInSeconds) {
    let now = new Date();
    let created = new Date(dateInSeconds * 1000); // convert to miliseconds
    let duration = now - created;

    return humanizeDuration(duration, { units: ["y", "mo", "w", "d", "h"], round: true });
}