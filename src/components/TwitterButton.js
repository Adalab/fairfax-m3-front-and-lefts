import React from 'react';
import icoTwitter from '../images/twitter.svg';

class TwitterButton extends React.Component {
	render() {
		return this.props.linkProvided ? (
			<React.Fragment>
			<p className="card-create">La tarjeta ha sido creada</p>
        <a className="card-link" target="_blank" href={this.props.linkProvided}>
            {this.props.linkProvided}
        </a>
			<div className="align_share">
				{' '}
				<a
					className="twitter-share-button"
					href={`https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url=${this.props.linkProvided}`}
					data-size="large"
					target="_blank"
				>
					<img
						className="icon__twitter"
						src={icoTwitter}
						alt="compartir en Twitter"
					/>
					Compartir en Twitter
				</a>
			</div>
			</React.Fragment>
		) : ''
	}
}

export default TwitterButton;
