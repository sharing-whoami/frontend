export default function getTodayDate() {
    // 년/월/일
    const date = new Date();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}