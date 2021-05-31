const getDateArray = () => {
    let arr = [];
    let d = new Date();
    const monthShortNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    for (let i = 0; i < 30; i++) {
      d = new Date(d - 1 * 24 * 60 * 60 * 1000);
      arr.push(d.getDate().toString() + ' ' + monthShortNames[d.getMonth()]);
    }
    return arr;
}

export default getDateArray;