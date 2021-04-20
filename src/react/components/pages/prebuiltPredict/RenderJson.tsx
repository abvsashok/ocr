import React, { useEffect, useState } from "react";
import Page from "./Page";
import sample from "./sample.json";
function RenderJson ({data, currentPage}) {

    const [pages, setPages] = useState<any>([]);

    useEffect(()=>{
        let pages = [];
        let docs = data && data.analyzeResult && data.analyzeResult.documentResults ? data.analyzeResult.documentResults[0] : {};
        if(data && data.analyzeResult && data.analyzeResult.pageResults){
            pages = data.analyzeResult.pageResults;
        }
        if(docs && docs.fields && Object.values(docs.fields).length){
            let fields:any = Object.values(docs.fields);
            pages = pages.map((p)=>{
               let paras =  fields.filter((d)=> { return d.page == p.page });
                return {...p, ...{paras:paras}}
            })
        }
        if(currentPage){
            pages =  pages.filter(function(p){ return p.page == currentPage});
        }
        setPages(pages);
    },[currentPage])

    return (<div className="render-json-section" style={{height:window.innerHeight-150, overflow:"scroll"}}>
            {
                pages.map((page)=> {
                    return <Page data={page} />
                })
            }

    </div>);
}

export default RenderJson;