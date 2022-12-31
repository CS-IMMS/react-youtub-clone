import React from 'react'
import {ListGroup} from 'react-bootstrap'
import '../App.css'



function Suggetion({videoList,id , changeSelection}) {

          const changeSelectedVideo = (data) =>{
            changeSelection(data)
          }
    return (
        <>
                {videoList.length >0 && videoList.map(data =>
            <ListGroup onClick={()=> changeSelectedVideo(data)}>
                <div
                    key={data.id} 
                    onClick={()=>{changeSelectedVideo(data)}}
                    style={{
                        marginBottom:10,
                        padding:10,
                        display:'flex',
                        cursor: 'pointer'
                    }}>
                    
                
                    <div>
                        <img src={data.thumbnails.medium.url} height='80px'/>
                    </div>
                    <div style={{paddingLeft:5}}>
                        <div className='sugg-title'> {data.title} </div>
                        <div className='sugg-channel'> {data.channel.title} </div>
                    </div>
                </div>  
            </ListGroup>
            )}
        </>
    )
}

export default Suggetion
