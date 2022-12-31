import React,{ useState,useEffect } from 'react'
import { Col,Row,Container,ListGroup } from 'react-bootstrap'
import SingleVideos from './SingleVideos'
import Suggetion from './Suggetion'
import Youtube from 'simple-youtube-api'
import Config from '../Config'
let youtube ='';


function Videos({searchString}) {
    
    const [videoList , setVideoList] = useState([ ]);
    const [selectedVideo, setSelectedVideo] =useState({})
    const [error, setError]= useState(false)

    youtube = new Youtube(Config.apiKey);

    useEffect(()=>{
    const callApi = async () =>{
        
      const result = await  youtube.searchVideos(searchString, 5);
      if(result.length === 0){
        setError(true)
      }else{
        setError(false)
      }
      setSelectedVideo(result[0])
      setVideoList(result)
    }
        callApi();


    }, [searchString])

    
    const selectedVideoCallback = (videoDetail)=>{
        setSelectedVideo(videoDetail)
    }
    return (
        <>
            
            <Container>
                <Row>
                   
                    <Col xs={12} lg={8} >
                         {error ? <h1>desolé 🤷‍♂️ pas de resultat trouver </h1> :
                         ( <SingleVideos detail={selectedVideo}/>)
                         }
                    {selectedVideo.title ? selectedVideo.title : 'Loading....'}
                       
                    </Col>
                    <Col xs={12} lg={4} >
                        {!error && (
                            <ListGroup>
                            <p>Suggestion</p>
                            <Suggetion videoList ={videoList} changeSelection ={selectedVideoCallback}/>
                        </ListGroup>
                        )}
                        
                        
                    </Col>
                </Row>
            </Container>
        
        </>
        
    )
}

export default Videos
