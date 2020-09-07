import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    modelNameFromPayloadKey(key) {
        return key
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { task: payload.data };
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
