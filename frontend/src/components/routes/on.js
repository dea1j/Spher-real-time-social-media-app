import React from 'react';
import Navbar from '../navbar/navbar'
import Users from '../users/users'
import Posts from '../posts/posts';
import EditPost from '../posts/edit-post'
import {Switch,Redirect,Route} from 'react-router-dom';

const On=({handleAuth})=>{
	return <div>
		<Navbar handleAuth={handleAuth} />         
		<div  className="wrapper">
		<Switch>
			<Route exact path="/posts" component={Posts} />
			<Route exact path="/users" component={Users} />
			<Route exact path="/posts/edit/:id" component={EditPost} />
			<Redirect from="*" to="/posts" />
		</Switch>
		</div>
		</div>
}
export default On;