$("#index-title").html(getTitle());

function getTitle() {
    var storage = window.sessionStorage;
    var dataInCache = storage.getItem("indexTitle");//localStorage取数据

    if (dataInCache !== null) {	//localStorage有数据则直接渲染
        return dataInCache;
    } else {
        $.getJSON("storage/index.json", function (data) {
            data.sort(function () {
                return (0.5 - Math.random());
            });
            storage.setItem("indexTitle", data[0]);//放入localStorage，名字为renderRoute。

            return data[0];
        })
    }
}

