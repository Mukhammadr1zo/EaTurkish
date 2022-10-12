const getMonthInString = (index) => {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[index]
}

const getTimes = (date) => {
    if (!date) return {}

    date = new Date(date)

    const year = date.getFullYear() || ''
    const day = date.getDay() || ''
    const month = date.getMonth() + 1
    const time = date.toLocaleTimeString().slice(0, 5)

    const monthInStr = getMonthInString(date.getMonth()) || ''
    const fullDate = `${day} ${monthInStr} ${year}` || ''

    return {
        year,
        day,
        month,
        time,
        fullDate
    }
}

export default getTimes