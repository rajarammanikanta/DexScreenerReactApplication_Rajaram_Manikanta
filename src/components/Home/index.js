
import {Component} from 'react' 

import {RiNftFill} from 'react-icons/ri'
import {MdOutlineToken} from 'react-icons/md'
import {PiCopy} from 'react-icons/pi'
import {AiOutlineSearch,AiOutlineDollar} from 'react-icons/ai'
import Footer from '../Footer'
import {BiErrorCircle} from 'react-icons/bi'


import './index.css'

class Home extends Component{
    state={selectedAddressToken: true,selectedAddressPair: false,searchInput: '',tokenDataList: []} 

    changeBackgroundColorToken=()=>{
        this.setState(preState=>({selectedAddressToken: !preState.selectedAddressToken}))
    }
    changeBackgroundColorPair=()=>{
        this.setState(preState=>({selectedAddressPair: !preState.selectedAddressPair}))
    }

    componentDidMount(){
        this.getSearchResults()
    }

    getSearchResults=async()=>{
        const{searchInput}=this.state
        const apiUrl=`https://api.dexscreener.com/latest/dex/tokens/${searchInput}`
     
        const response=await fetch(apiUrl)

        if(response.ok===true){
            const data=await response.json() 
            console.log(data) 
            const updatedData=data.pairs.slice(0, 4).map(eachData=>({
                name: eachData.baseToken.name,
                pairCreatedAt: eachData.pairCreatedAt,
                symbol: eachData.quoteToken.symbol,
                dexId:eachData.dexId,
                pairAddress: eachData.pairAddress,
                address: eachData.baseToken.address,
                priceNative: eachData.priceNative,
                priceUsd: eachData.priceUsd,

                
            }))
            this.setState({tokenDataList: updatedData})
        }
      
      
    }

    getSearchInput=event=>{
        this.setState({searchInput: event.target.value})
    }
  
    enterToSearch=event=>{
        if(event.key==='Enter'){
         this.getSearchResults()
        }
    }

    renderTokenResults=()=>{
        const{tokenDataList}=this.state 
        return(
            <>
            <h1 className='token-heading'>Token Search Results</h1>
        
            <ul className='list-container'>
                {tokenDataList.map(eachToken=>(<li >
                    <div className='cards-overall'>
                    <div className='card'>
                    <div className='basic-info-and-logo'>
                        <h3 className='basic-info'>Basic Info</h3>
                        <div className='error-container'>
                        <BiErrorCircle className='error-logo'/>
                        </div>
                      
                        </div>
                     
                        <p className='side-headings'>Pair Created at:{eachToken.pairCreatedAt}</p>
                        <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                        <p className='side-headings'>DEX ID :{eachToken.dexId}</p>
                        <p className='side-headings'>Pair Address :{eachToken.pairAddress}</p>
                    </div>
                    <div className='card'>
                    <div className='basic-info-and-logo'>
                        <h3 className='basic-info'>Base Token</h3>
                        <div className='error-container'>
                        <MdOutlineToken className='error-logo'/>
                        </div>
                      
                        </div>
                     
                        <p className='side-headings'>Name:{eachToken.name}</p>
                        <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                        <p className='side-headings'>Address :{eachToken.address}</p>
                    </div>
                    <div className='card'>
                    <div className='basic-info-and-logo'>
                        <h3 className='basic-info'>Quote Token</h3>
                        <div className='error-container'>
                        <MdOutlineToken className='error-logo'/>
                        </div>
                      
                        </div>
                     
                        <p className='side-headings'>Name:{eachToken.name}</p>
                        <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                        <p className='side-headings'>Address :{eachToken.address}</p>
                    </div>
                
                    <div className='card'>
                    <div className='basic-info-and-logo'>
                        <h3 className='basic-info'>Price</h3>
                        <div className='error-container'>
                        <AiOutlineDollar className='error-logo'/>
                        </div>
                      
                        </div>
                     
                        <p className='side-headings'>Price Native:{eachToken.priceNative}</p>
                        <p className='side-headings'>Price USD:{eachToken.priceUsd}</p>
                      
                    </div>
                
                
               
               
                    </div>
                    

                   
                </li>))}
            </ul>
            </>
        )
    }

renderPairResults=()=>{
    const{tokenDataList}=this.state 
    return(
        <>
             <h1 className='token-heading'>Pair Search Results</h1>
    
        <ul className='list-container'>
            {tokenDataList.map(eachToken=>(<li >
                <div className='cards-overall'>
                <div className='card'>
                <div className='basic-info-and-logo'>
                    <h3 className='basic-info'>Basic Info</h3>
                    <div className='error-container'>
                    <BiErrorCircle className='error-logo'/>
                    </div>
                  
                    </div>
                 
                    <p className='side-headings'>Pair Created at:{eachToken.pairCreatedAt}</p>
                    <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                    <p className='side-headings'>DEX ID :{eachToken.dexId}</p>
                    <p className='side-headings'>Pair Address :{eachToken.pairAddress}</p>
                </div>
                <div className='card'>
                <div className='basic-info-and-logo'>
                    <h3 className='basic-info'>Base Token</h3>
                    <div className='error-container'>
                    <MdOutlineToken className='error-logo'/>
                    </div>
                  
                    </div>
                 
                    <p className='side-headings'>Name:{eachToken.name}</p>
                    <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                    <p className='side-headings'>Address :{eachToken.address}</p>
                </div>
                <div className='card'>
                <div className='basic-info-and-logo'>
                    <h3 className='basic-info'>Quote Token</h3>
                    <div className='error-container'>
                    <MdOutlineToken className='error-logo'/>
                    </div>
                  
                    </div>
                 
                    <p className='side-headings'>Name:{eachToken.name}</p>
                    <p className='side-headings'>Symbol:{eachToken.symbol}</p>
                    <p className='side-headings'>Address :{eachToken.address}</p>
                </div>
            
                <div className='card'>
                <div className='basic-info-and-logo'>
                    <h3 className='basic-info'>Price</h3>
                    <div className='error-container'>
                    <AiOutlineDollar className='error-logo'/>
                    </div>
                  
                    </div>
                 
                    <p className='side-headings'>Price Native:{eachToken.priceNative}</p>
                    <p className='side-headings'>Price USD:{eachToken.priceUsd}</p>
                  
                </div>
            
            
           
           
                </div>
                

               
            </li>))}
        </ul>
        </>
    )
}
 

    render(){
        const{tokenDataList}=this.state 
        console.log(tokenDataList)
        const{searchInput}=this.state 
        console.log(searchInput)

        const{selectedAddressToken,selectedAddressPair}=this.state 

        const updateBackgroundToken=selectedAddressToken ? `selected-background`: `logo-container-token`
        const updateBackgroundPair=selectedAddressPair ? `selected-background`: `logo-container-token`
        return(
            <div className='overall-container'> 
    
       
                <nav className='left-nav-bar'> 
                <div className='website-logo-container'>
                <RiNftFill className='website-logo'/>
              <h1 className='heading'>NTFify</h1>
                </div>
                <div className='phone-mode'>
                <div className={updateBackgroundToken} onClick={this.changeBackgroundColorToken}>
                    <MdOutlineToken className='Token-logo'/>
            <h3>Token Address</h3>
        </div>
        <div className={updateBackgroundPair} onClick={this.changeBackgroundColorPair}> 
            <PiCopy className='Token-logo'/>
            <h3>Pair Address</h3>
        </div>
                </div>
        

                </nav>
      
            <div className='search-container'>
                <div className='search-button-container'>
                <div className='search-bar-container'>
                <input type="search" placeholder='search' className='search-bar' onChange={this.getSearchInput} onKeyDown={this.enterToSearch}/>
                <AiOutlineSearch className='search-icon'/>
                </div>
                <div>
            <button type="button" className='connect-button'>Connect</button>
        

           </div>
                </div>
              
          
           
           <div>
         {selectedAddressToken && this.renderTokenResults()}
         {selectedAddressPair && this.renderPairResults()}
        
           </div>
             <Footer/>
            </div>
          
    
            </div>
            

        )
    }
}




export default Home