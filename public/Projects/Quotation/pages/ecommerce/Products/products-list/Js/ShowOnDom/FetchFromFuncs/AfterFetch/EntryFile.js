
let StartFunc = ({ inDataToShow }) => {
    console.log("inDataToShow:",inDataToShow);

    if (document.getElementById('products-list')) {

        const dataTableSearch = new simpleDatatables.DataTable("#products-list", {
            searchable: false,
            fixedHeight: true,
            perPage: 5,
            data: {
                headings: Object.keys(inDataToShow[0]),
                data: inDataToShow.map(item => Object.values(item))
            }
        });

        document.querySelectorAll(".export").forEach(function (el) {
            el.addEventListener("click", function (e) {
                var type = el.dataset.type;

                var data = {
                    type: type,
                    filename: "material-" + type,
                };

                if (type === "csv") {
                    data.columnDelimiter = "|";
                }

                dataTableSearch.export(data);
            });
        });
    };
};



export { StartFunc }