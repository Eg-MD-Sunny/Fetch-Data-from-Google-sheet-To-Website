//Data fatchig from Google Sheet Api
fetch('https://sheet.best/api/sheets/d9d83c15-39fa-4af6-99e5-c35af36f2034')
.then(res => res.json())
.then(data=>{
    //console.log(data);
    if(data.length > 0){
        var temp = " ";
        data.forEach((u) => {
            temp += "<tr>"
            temp += "<td>" + u.CDBD + "</td>"
            temp += "<td>" + u.FullName + "</td>"
            temp += "<td>" + u.Area + "</td>"
            temp += "<td>" + u.JoinedOn + "</td>"
            temp += "<td>" + u.DesignationName + "</td></tr>"

        })
        document.getElementById('data').innerHTML = temp;
    }
})