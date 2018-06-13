import React, {Component} from 'react'
import Senses from './Senses'

class Entries extends Component {

    render() {
        let data = this.props.data
        let senses = this.props.data.entries[0].senses
        return(
            <div>
                <h5 className={'category-text'}>{data.lexicalCategory}</h5>
                {  senses && senses.length > 0 ?
                    senses.map((sense, i)=>
                        <Senses key={i} data={sense} index={i} />
                    )
                    :
                    ''
                }
                <hr />
            </div>
        )
    }
    
}

export default Entries