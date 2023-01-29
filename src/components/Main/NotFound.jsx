import { Button, Result } from 'antd'
import { NavLink } from 'react-router-dom'
const NotFound = () => (
   <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      className="page__404"
      extra={
         <NavLink to="/">
            <Button type="primary">Back Home</Button>
         </NavLink>
      }
   />
)
export default NotFound
