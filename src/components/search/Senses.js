import React, {Component} from 'react'

class Senses extends Component {
    
    render() {
        let index = this.props.index
        let example = this.props.data.examples ? '‘' + this.props.data.examples[0].text + '’' : ''
        let synonyms = this.props.data.synonyms
        let subsenses = this.props.data.subsenses

        return(
            <div>
                <h5>{ index + 1 } <span>{ example }</span></h5>
                <span className={'synonym-text'}>SYNONYMS</span>
                <ul>
                    <li>
                        { synonyms && synonyms.length > 0 ?
                            synonyms.map((synonym,i)=>
                                <span key={i}>{synonym.text}{ i < synonyms.length - 1 && <span key={i}>, </span>}</span>
                            )
                            :
                            ''
                        }
                    </li>
                    
                    { subsenses && subsenses.length > 0 ?
                        subsenses.map((subsense,i)=>
                            <li key={i}>
                                { subsense && subsense.synonyms.length > 0 ? 
                                    subsense.synonyms.map((synonym,i)=>
                                        <span key={i}>{synonym.text}{ i < subsense.synonyms.length - 1 && <span key={i}>, </span>}</span>
                                    )
                                    :
                                    ''
                                }
                            </li>
                        )
                        :
                        ''
                    }
                </ul>
            </div>
        )
    }
    
}
export default Senses