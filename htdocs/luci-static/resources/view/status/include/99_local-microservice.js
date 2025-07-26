'use strict';
'require baseclass';
'require rpc';

const callOutput = rpc.declare({
    object: 'local-microservice',
    method: 'output',
    params: [],
    expect: { },
});

document.querySelector('head').appendChild(E('link', {
	'rel': 'stylesheet',
	'type': 'text/css',
	'href': L.resource('view/local-microservice/status-overview.css')
}));

return baseclass.extend({
    title: _("Details"),

    load: function() { 
        return Promise.all([
            callOutput("content"),
        ]);
    },

    render: function(result) { 
        if (!result[0].content) {
			return null;
		}
		
		const container = E('div', { 'id': 'local-microservice-output' });
        
        const parser = new DOMParser();
        const fragment = parser.parseFromString(result[0].content, "text/html");
        const elements = fragment.querySelectorAll(
            ":not(html, head, body, meta, link, title, script, br)");
        
        for (let element of elements) {
            container.appendChild(element);
        }

        return container;
    }
});