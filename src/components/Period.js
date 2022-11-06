import Moment from "moment";

const Period = ({startDate, endDate, format = 'MMMM YYYY', defaultValue = 'Present'}) => {
    const start = startDate ? Moment(startDate).format(format) : defaultValue
    const end = endDate ? Moment(endDate).format(format) : defaultValue

    return start !== end ? `${start} - ${end}` : start
};

export default Period;