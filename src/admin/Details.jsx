import React, { Component } from 'react';

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []        
        };
    }

    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("https://dainty-licorice-4d88aa.netlify.app/.netlify/functions/hello")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result.results
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    {
                        posts.map(post => (
                                <div>
                                    <p>{post.message}</p>
                                </div>
                        ))
                    }
                    
                </div>
            );
        }
      
    }
  }
  
  export default Details;

