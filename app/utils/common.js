function Console(type) {
    return console[type];
}

export const log = (txt) => {
    return Console('log').call(null, `%c[INFO] ${txt}`, 'color: green');
};