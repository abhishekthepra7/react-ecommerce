import { blue, green, red } from '@mui/material/colors';
import * as React from 'react';

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 0,
            amount: 0,
            coupon: null,
            isCouponSuccess: false,
            isCouponFail: false
        }
    }

    handleCouponSubmit = (event) => {
        if (this.state.coupon === this.props.coupon) {
            this.setState({ amount: this.state.amount * (1 - this.props.discount / 100), isCouponSuccess: true, isCouponFail: false })
        } else {
            this.setState({ amount: this.state.years * this.props.insurancePremium, isCouponFail: true, isCouponSuccess: false })
        }
        event.preventDefault();
    }

    handleInsuranceSuccess = (event) => {
        alert("You are insured now:");
        event.preventDefault();
    }

    increment = (event) => {
        const actualAmount = (this.state.years + 1) * this.props.insurancePremium
        const amount = this.state.isCouponSuccess ? actualAmount * (1 - this.props.discount / 100) : actualAmount;
        this.setState({ years: this.state.years + 1, amount })
    }

    decrement = (event) => {
        if (this.state.years > 0) {
            const actualAmount = (this.state.years - 1) * this.props.insurancePremium
            const amount = this.state.isCouponSuccess ? actualAmount * (1 - this.props.discount / 100) : actualAmount;
            this.setState({ years: this.state.years - 1, amount })
        }
    }

    handleChange = (event) => {
        this.setState({ coupon: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <div className='item-container'>
                    <div className='item'>
                        <img src={this.props.imageurl} style={{ width: "300px", height: "100px" }} alt="notjing"></img>
                        <div className='item-description'>
                            <div>
                                Vehicle type: {this.props.type}
                            </div>
                            <div>
                                Years Insured :
                                <button className='button-small' onClick={this.increment}>+</button>
                                {this.state.years}
                                <button className='button-small' onClick={this.decrement}>-</button>
                            </div>
                            <div> Premium Cost : {this.state.amount}</div>
                            <form onSubmit={this.handleCouponSubmit}>
                                <input type="text" value={this.state.coupon} placeholder="Enter Coupon code" onChange={this.handleChange} />
                                <input type="submit" value="Submit" />
                            </form>
                            {this.state.isCouponSuccess ? <div style={{ color: "green" }}>Coupon Applied Successfully!!!</div> : true}
                            {this.state.isCouponFail ? <div style={{ color: "red" }}>Coupon is Invalid</div> : true}
                            <button className='button-big' style={{backgroundColor: "greenyellow"}} onClick={this.handleInsuranceSuccess}> Get Insured</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}