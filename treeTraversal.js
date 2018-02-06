function traversal(str) {
    $("table tbody").children("tr").each(function(index) {
        $(this).children("td").each(function(index) {
            if (this.style.color !== this.style.backgroundColor){
                str += $(this).text();
            }
        });
    });
}

console.log(traversal(str));

