export default function (instance) {
    return {
        clog(text) {
            //вызов lib.debug.clog("текст");
            //вывод отладочной информации только в режиме development
            //console.log("режим="+process.env.NODE_ENV);

            if (process.env.NODE_ENV == 'development') {
                console.log(text);
            }
        }
    }
}