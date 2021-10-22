import React from 'react'
import { Card } from 'react-bootstrap';

export const Footer = (marg) => {
    return (
        <div>
            
            <Card.Footer>
                <div className="mastfoot" style={{backgroundColor:'black',paddingBottom:'3px',padding:'3px',marginTop:{marg}}}>
                    <div style={{width:'100%'}}>
                        <p style={{color:'white',textAlign:'center'}}>Copyright {'\u00A9'} 2021 AdiWeb.com | All rights reserved.</p>
                    </div>
                </div>
            </Card.Footer>
        </div>
    )
}
