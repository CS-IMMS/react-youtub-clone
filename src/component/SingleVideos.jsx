import React from 'react'

function SingleVideos({detail}) {
    //const {id,title,description} = detail;
    return (
        <div>
            {detail && (
                <div>
                    <div>
                        <iframe 
                            width="600" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${detail.id}`} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                        </iframe>
                    </div>
                    <div>
                            <div><h4>{detail.title}</h4></div>
                            <div><p>{detail.description}</p></div>
                    </div>
                </div>
            )}
            
            
        </div>
    )
}

export default SingleVideos
