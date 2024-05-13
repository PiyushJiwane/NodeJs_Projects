const db_map=new Map()

const getData=()=>{
    return db_map.size!==0?[...db_map.values()]:"no data found in db"
}

const getDataById=(key)=>{
    const id=Number(key)
    return db_map.size!==0?db_map.get(id):`no data found in db with an id : ${id}`
}

const setData=(key,value)=>{
    db_map.set(key,value)
}

export {getData,setData,getDataById}