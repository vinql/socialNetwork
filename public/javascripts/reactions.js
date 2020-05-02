function changeReaction(button, owner_id, owner_type, user_id, ownerPost_id) {
	if (user_id == ownerPost_id)
	{

	}
	else
	{

		if (button.style.color != 'white') {
			var counter_id = 'counter'+owner_type+owner_id+'_'+button.value;
			button.style.color = 'white';
			var counter = document.getElementById(counter_id).innerHTML;
			document.getElementById(counter_id).innerHTML = counter-1;
			if (button.value == 'type1')
			{
				button.innerHTML = 'favorite_border';
			}
		}
		else {
			let types = ['type1', 'type2', 'type3', 'type4']

			for (let type of types) {
				otherReactionsId = 'reaction'+owner_type+owner_id+'_'+type;
				var element = document.getElementById(otherReactionsId)
				if (element.style.color != 'white')
				{
					element.style.color = 'white';

					var counter_id = 'counter'+owner_type+owner_id+'_'+element.value;
					var counter = document.getElementById(counter_id).innerHTML;
					document.getElementById(counter_id).innerHTML = counter-1;
					if (type == 'type1')
					{
						element.innerHTML = 'favorite_border';
					}
				}
			}

			var counter_id = 'counter'+owner_type+owner_id+'_'+button.value;

			switch(button.value) {
			  case 'type1':
			  	button.style.color = '#E91E63';
			  	button.innerHTML = 'favorite';
			    break;
			  case 'type2':
			  	button.style.color = 'red';
			    break;
			  case 'type3':
			  	button.style.color = '#FFEB3B';
			    break;
			  case 'type4':
			  	button.style.color = '#2196F3';
			    break;
			  default:
			  	button.style.color = 'white';
			}
			var counter = document.getElementById(counter_id).innerHTML;
			document.getElementById(counter_id).innerHTML = parseInt(counter)+1;
		}

		if (owner_type == 'PostOpen')
		{
			var buttonId = 'reactionPost'+owner_id+'_'+button.value; 
			button = document.getElementById(buttonId);
			changeReaction(button, owner_id, 'Post', user_id, ownerPost_id);
		}
	}

}
