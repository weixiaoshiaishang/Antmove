const utils = require('../../api/utils');
Component({
    props: {
        id: 'mapId',
        'longitude': 0,
        'latitude': 0,
        'scale': 15,
        markers: [],
        'polyline': [],
        'polygons': [],
        'circles': [],
        'controls': [],
        'include-points': [],
        'show-location': false,
        'subkey': '',
        'enable-3D': false,
        'show-compass': false,
        'enable-overlooking': false,
        'enable-zoom': false,
        'enable-scroll': false,
        'enable-rotate': false,
        style: '',
        onMarkerTap: () => { },
        onCalloutTap: () => { },
        onControlTap: () => { },
        onRegionChange: () => { },
        onTap: () => { },
        onUpdated: () => { },
        onPoiTap: () => { }
    },
    data: {
        alMakers: [],
        mapStyle: '',
        setting: {
            gestureEnable: 0,
        }
    },
    didUpdate () {
        this.setData({
            mapStyle: this.props.style
        });
        this.processProps();
    },
    didMount () {
        this.processProps();
    },
    methods: {
        processProps () {
            // maekers 差异
            let alMarkers = this.props.markers.map(el => {
                if (el.zIndex) {
                    utils.warn(
                        'markers暂不支持zIndex',
                        {
                            apiName: 'map',
                            errorType: 0,
                            type: 'component'
                        });
                }
                if (el['aria-label']) {
                    utils.warn(
                        'markers暂不支持aria-label',
                        {
                            apiName: 'map',
                            errorType: 0,
                            type: 'component'
                        });
                }
                if (el.callout) {
                    if (el.callout.display === 'ALWAYS') {
                        el.customCallout = {
                            type: 2,
                            descList: [{
                                desc: el.callout.content,
                                descColor: '#333333'
                            }],
                            isShow: 1
                        };
                    }

                    if (el.callout.color) {
                        utils.warn(
                            'markers callout暂不支持color',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.fontSize) {
                        utils.warn(
                            'markers callout暂不支持fontSize',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.borderRadius) {
                        utils.warn(
                            'markers callout暂不支持borderRadius',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.borderWidth) {
                        utils.warn(
                            'markers callout暂不支持borderWidth',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.borderColor) {
                        utils.warn(
                            'markers callout暂不支持borderColor',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.bgColor) {
                        utils.warn(
                            'markers callout暂不支持bgColor',
                            {
                                apiName: 'map',
                                errorType: 0,
                                type: 'component'
                            });
                    }
                    if (el.callout.padding) {
                        utils.warn('markers callout暂不支持padding',{
                            apiName: 'map',
                            errorType: 0,
                            type: 'component'
                        });
                    }
                    if (el.callout.display) {
                        utils.warn('markers callout暂不支持display',{
                            apiName: 'map',
                            errorType: 0,
                            type: 'component'
                        });
                    }
                    if (el.callout.textAlign) {
                        utils.warn('markers callout暂不支持textAlign',{
                            apiName: 'map',
                            errorType: 0,
                            type: 'component'
                        });
                    }
                }
                if (el.anchor) {
                    Object.assign(el, {
                        anchorX: el.anchor.x,
                        anchorY: el.anchor.y
                    });
                }
                return el;
            });
            const setting = {
                gestureEnable: 0,
            };
            if (this.props["enable-scroll"]) {
                setting.gestureEnable = 1;
            }
            this.setData({
                alMakers: alMarkers,
                
            });
            // polyline 差异
            this.props.polyline.map(el => {
                if (el.arrowLine) {
                    utils.warn('polyline暂不支持arrowLine',{
                        apiName: 'map',
                        errorType: 0,
                        type: 'component'
                    });
                }
                if (el['arrowIconPath']) {
                    utils.warn('polyline暂不支持arrowIconPath',{
                        apiName: 'map',
                        errorType: 0,
                        type: 'component'
                    });
                }
                if (el['borderColor']) {
                    utils.warn('polyline暂不支持borderColor',{
                        apiName: 'map',
                        errorType: 0,
                        type: 'component'
                    });
                }
                if (el['borderWidth']) {
                    utils.warn('polyline暂不支持borderWidth',{
                        apiName: 'map',
                        errorType: 0,
                        type: 'component'
                    });
                }
            });
            // polygons 差异
            this.props.polygons.map(el => {
                if (el.zIndex) {
                    utils.warn('polygons暂不支持zIndex',{
                        apiName: 'map',
                        errorType: 0,
                        type: 'component'
                    });
                }
                if (el['strokeColor']) {
                    el['color'] = el.strokeColor;
                }
                if (el['strokeWidth']) {
                    el['width'] = el.strokeWidth;
                }
            });
            if (this.props.subkey) {
                utils.warn('暂不支持subkey',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['enable-3D']) {
                utils.warn('暂不支持enable-3D',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['show-compass']) {
                utils.warn('暂不支持show-compass',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['enable-overlooking']) {
                utils.warn('暂不支持enable-overlooking',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['enable-zoom']) {
                utils.warn('暂不支持enable-zoom',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            
            if (this.props['enable-rotate']) {
                utils.warn('暂不支持enable-rotate',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['onUpdated']) {
                utils.warn('暂不支持onupdated',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
            if (this.props['onPoiTap']) {
                utils.warn('暂不支持onpoitap',{
                    apiName: 'map',
                    errorType: 0,
                    type: 'component'
                });
            }
        },
        onMarkerTapFn (e) {
            this.props.onMarkerTap && this.props.onMarkerTap(e);
        },
        onCalloutTapFn (e) {
            this.props.onCalloutTap && this.props.onCalloutTap(e);
        },
        onControlTapFn (e) {
            this.props.onControlTap && this.props.onControlTap(e);
        },

        onRegionChangeFn (e) {
            e.timeStamp = Number(Date.now());
            let defValue = {
                causedBy: "update",
                currentTarget: {
                    dataset: {},
                    id: "map",
                    offsetLeft: 0,
                    offsetTop: 0,
                    detail: {
                        type: "end"
                    }
                },
                target: {
                    dataset: {},
                    id: "map",
                    offsetTop: 0,
                    offsetLeft: 0
                },
                timeStamp: Number(Date.now()),
                type: "end"
            };
            this.props.onRegionChange && this.props.onRegionChange(Object.assign(defValue, e));
        },
        onTapFn (e) {
            this.props.onTap && this.props.onTap(e);
        }
    }
});
