import React from "react";
import Table from "./Table";
function Page ({data}) {

    var {tables, Lines, paras, page} = data;
    let title = "";
    
if(paras){
   let titleObj = paras.find(function(doc){ return doc.fieldName == 'Title'});
   if(titleObj){
       title = titleObj.text;
   }
   paras = paras.filter(function(doc){ return doc.fieldName != 'Title'});
}

    return (<div className="page-body p-2">
            {page ? <h5>Page {page}</h5>: ""}
            {title ? <p>{title} </p> : null}
            {
                tables && tables.length ? tables.map((table)=>{
                    return <Table data={table} />
                }) : ""
            }
            <br />
            {
                paras && paras.length ? paras.map((paragraph)=>{
                    return <p>{paragraph.text}</p>
                })  : ""
            }
    </div>);
}

export default Page;