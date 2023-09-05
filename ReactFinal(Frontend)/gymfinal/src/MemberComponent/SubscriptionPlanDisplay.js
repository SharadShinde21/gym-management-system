import React from 'react'
import AdminServices from '../Services/AdminServices';
import MemberNavbar from '../NavbarComponent/MemberNavbar';

class SubscriptionplanComponents extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subplan: []
        }

    }
    componentDidMount() {

        AdminServices.getSubplans().then((response) => {
            this.setState({ subplan: response.data })
        })

    }

    render() {
        return (
            <div className='container'>
                <MemberNavbar />
                <h2 style={{ textAlign: 'center', color: 'green' }}>Plan List</h2>
                <div>

                    <br />
                    <br />
                </div>
                <table className="table  table-striped" style={{ border: '2px solid black' }}>

                    <thead>
                        <tr>

                            <th>SUBPLAN-Id</th>
                            <th>PLAN-NAME</th>
                            <th>DURATION</th>
                            <th>AMOUNT</th>




                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.subplan.map(
                                subplan =>
                                    <tr key={subplan.subplanId}>
                                        <td>{subplan.subplanId}</td>
                                        <td>{subplan.planName}</td>
                                        <td>{subplan.duration}</td>
                                        <td>{subplan.amount}</td>


                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubscriptionplanComponents
