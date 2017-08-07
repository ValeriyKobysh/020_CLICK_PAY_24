(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        }
        else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    (lib.anim14 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgoAqQgSgSABgYQgBgXASgRQAQgSAYAAQAZAAARASQAQARABAXQgBAYgQASQgRARgZAAQgYAAgQgRg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.8, -5.9, 11.8, 11.8);
    (lib.anim13 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgoAqQgSgSABgYQgBgXASgRQAQgSAYAAQAZAAARASQAQARABAXQgBAYgQASQgRARgZAAQgYAAgQgRg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.8, -5.9, 11.8, 11.8);
    (lib.anim9 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgoApQgRgRAAgYQAAgXARgRQARgSAXAAQAYAAASASQARARAAAXQAAAYgRARQgSASgYAAQgXAAgRgSg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.8, -5.9, 11.8, 11.9);
    (lib.anim8 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAgQgFgEAAgGIAAgrQAAgGAFgEQAEgFAFABQAGgBAEAFQAFAEAAAGIAAArQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.4, -3.6, 3, 7.4);
    (lib.anim7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAgQgFgEAAgGIAAgrQAAgGAFgEQAEgFAFABQAGgBAEAFQAFAEAAAGIAAArQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.4, -3.6, 3, 7.4);
    (lib.anim6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAoQgFgEAAgGIAAg6QAAgHAFgDQAEgFAFAAQAGAAAEAFQAFADAAAHIAAA6QAAAGgFAEQgEAEgGAAQgFAAgEgEg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5, -4.4, 3, 8.9);
    (lib.anim5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAoQgFgEAAgGIAAg6QAAgHAFgDQAEgFAFAAQAGAAAEAFQAFADAAAHIAAA6QAAAGgFAEQgEAEgGAAQgFAAgEgEg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5, -4.4, 3, 8.9);
    (lib.anim3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAZQgFgEAAgGIAAgdQAAgGAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAGIAAAdQAAAGgEAEQgFAEgGAAQgFAAgEgEg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.4, -2.9, 3, 5.9);
    (lib.anim2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgJAhQgFgFAAgGIAAgrQAAgGAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAGIAAArQAAAGgEAFQgFAEgGAAQgFAAgEgEg");
        this.shape.setTransform(0, 0, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5, -3.7, 3, 7.4);
    (lib.m2_2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.anim2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(1.5, 0, 1, 1, 0, 0, 0, 0, -3.7);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ scaleY: 0.55 }, 6, cjs.Ease.get(-1)).to({ scaleY: 1 }, 6, cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 3, 7.4);
    (lib.m2_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.anim3("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(1.5, 0, 1, 0.419, 0, 0, 0, 0, -2.9);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ scaleY: 1 }, 6).to({ scaleY: 0.42 }, 6).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 3, 2.5);
    (lib.m1_2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.anim5("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(1.5, 9, 1, 0.47, 0, 0, 0, 0, 4.6);
        this.instance_1 = new lib.anim6("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.5, 8.9, 1, 1, 0, 0, 0, 0, 4.5);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true, regY: 4.5, scaleY: 1, y: 8.9 }, 6, cjs.Ease.get(-1)).to({ _off: false, regY: 4.6, scaleY: 0.47, y: 9 }, 6, cjs.Ease.get(1)).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ _off: false }, 6, cjs.Ease.get(-1)).to({ _off: true, regY: 4.6, scaleY: 0.47, y: 9 }, 6, cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 4.8, 3, 4.2);
    (lib.m1_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.anim7("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(1.5, 0.1, 1, 1, 0, 0, 0, 0, -3.6);
        this.instance_1 = new lib.anim8("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(1.5, 0, 1, 0.466, 0, 0, 0, 0, -3.6);
        this.instance_1._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true, scaleY: 0.47, y: 0 }, 7, cjs.Ease.get(-1)).to({ _off: false, scaleY: 1, y: 0.1 }, 6, cjs.Ease.get(1)).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ _off: false }, 7, cjs.Ease.get(-1)).to({ _off: true, scaleY: 1, y: 0.1 }, 6, cjs.Ease.get(1)).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 3, 7.4);
    (lib.money = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AB8FJQgsgBgngWQgmgVgYgkQgng1AEhMQABgNACgKQAIgiAUgeIgWgLIkEAAQgFAAgFgEQgFgFABgGQgBgGAFgDQAFgEAFAAIEIAAQADAAADABIAbAMIAGAAIAAAAQArgsAEg6IgIgLIBJg6QAFgEAFABQAGAAAEAEIATATQAMANAQgHQAMgGABgNQACgKgGgIIgcgjQgEgDgEgCIhPgWQgHgCgGAFIhPBDIkcAAQgFAAgFgFQgFgEABgGQgBgGAFgEQAFgFAFAAIESAAIAvgpIgohEQgEgHAEgIQAFgIAIAAIEUAAQAIAAAFAIQAEAHgEAIIguBQIAEAAQAXAAAQATQASAYgTAhIACAIQAFAKgBAIQAAARgLANQALANAAAQQAAARgLAMQALANAAARQAAAIgEAKQAwA3AABIQAAAngOAkQgQAjgcAbQg4A2hMAAIgIgBgABJhjQgDBIg2A2QguAwABBDQABA/AtAuQAtAvA/ACIASAAIAOgCIACAAQAIgBAHgCIAAAAIAfgMIANgHIAAgBIAOgJIANgMQAJgKAHgIIADgEIACgDIAHgMIAHgPQADgFACgJIAEgMIABgEIAAgBIACgPIAAgBIABgeIgGgcIgKgbIgIgOIgRgXQgIAEgKAAIg6AAQgQAAgNgMIAAAaIAHAAQAVAAAPAPQAPAPAAAWIAAAHIgdAAIAAgHQAAgKgHgGQgGgGgJAAIgsAAIgFAAIgGACIgCACIgEAEIgDADIgBAFIgBABIAAAFIAAAAIAAAEIAAABIABADIAAAAIADAEQAHAJAMAAIArAAIAKABIABABIAKADIAHAEIABABIAHAFIABABIAFAHIAAAAIAFAJIADAJIAAABIABAJIAAACIgBAJQgCAIgFAKIgEAFIgBABQgRARgXAAIgFAAIAAAdIgeAAIAAgdIgHAAIgGgBQgTgCgNgOQgNgOAAgUIAAgIIAdAAIAAAIQAAAQAQAFIABAAIABAAIAEABIAsAAIAEgBIAFgBIAFgEIACgCIAEgFIACgFIAAgEIAAgBIgBgEIAAgBIgBgDIgCgDIAAgBQgHgJgNAAIgqAAIgJgBIgCAAIgJgDIgJgFIgBgBIgGgFIAAgBIgGgGIAAgBQgDgDgCgFIgEgLIAAgJIAAgBIAAgKQADgKAFgHIAEgGIABgBQAQgRAYAAIAFAAIAAgdIAaAAQgLgNAAgPQAAgRALgNQgLgMAAgRQAAgRALgMQgJgLgCgNIgFgEIgLgLgACmgRQgFAFAAAGQAAAGAFADQAEAEAGAAIA6AAQAHAAAEgEQAEgDAAgGQAAgGgEgFQgEgEgHAAIg6AAQgGAAgEAEgACmhLQgFAEAAAGQAAAGAFAFQAEAEAGAAIA6AAQAHAAAEgEQAEgFAAgGQAAgGgEgEQgEgFgHAAIg6AAQgGAAgEAFgADEh1QgGAFgKADIA2AAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAIgVAAQgGANgLAIgADOjBQAKALABAPIARAAQAHAAAEgFQAEgEAAgGQAAgGgEgEQgEgFgHAAIgfAAgABNkJIBNAWQAPAEALANIAQAAIArhJIjjAAIAaAqQAMgKAOAAQAHAAAGACg");
        this.shape.setTransform(33.9, 56.8, 1.006, 1.006);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AhxCoQgugugBg/QgBhCAvgwQA2g3ADhIIArgiIALALIAEAEQACANAJALQgLAMAAARQAAARALAMQgLANAAARQAAAQALANIgZAAIAAAdIgHAAQgXAAgPARIgBABIgEAGQgGAHgCAJIgBAKIAAABIABAJIAEALQACAFACADIAAABIAGAGIABABIAGAFIABABIAJAFIAJADIABAAIAKABIApAAQANAAAHAJIAAABIACADIABAEIAAAEIABABIgBAEIgBAFIgEAFIgCACIgFAEIgFABIgEABIgrAAIgEgBIgBAAIgCAAQgPgFAAgQIAAgIIgeAAIAAAIQAAAUAOAOQANAOATACIAGABIAHAAIAAAdIAcAAIAAgdIAIAAQAWAAAPgRIABgBIAFgFQAFgKACgIIABgJIAAgCIgBgJIAAgBIgDgJIgFgJIAAAAIgGgHIAAgBIgHgFIgBgBIgIgEIgKgDIgBgBIgJgBIgqAAQgNAAgGgJIgDgEIAAAAIgBgEIAAgEIAAAAIAAgFIABgBIABgFIACgDIAFgEIACgCIAGgBIAFAAIArAAQAJAAAGAFQAHAGAAAKIAAAHIAdAAIAAgHQAAgVgPgPQgPgPgVAAIgIAAIAAgaQANAMARAAIA6AAQAJAAAJgEIAKAMIAPAZIAFAMIAFAOIAFAcIAAAfIgCAPIgBABIgEAQQgCAJgDAFIgOAbIgDADQgHALgMALIgMAMIgOAJIgBABIgMAHIgfAMIgBAAQgHACgHABIgCAAIgOACIgRAAQg/gCgtgvg");
        this.shape_1.setTransform(47.1, 65.1, 1.006, 1.006);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AA3AkIh6ggIgTACIgagqIDiAAIgrBIg");
        this.shape_2.setTransform(46.5, 30.2, 1.006, 1.006);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#D2F0F8").s().p("AgcAPQgGAAgEgEQgFgFAAgGQAAgFAFgEQAEgFAGAAIA5AAQAHAAAEAFQAEAEAAAFQAAAGgEAFQgEAEgHAAg");
        this.shape_3.setTransform(54.5, 56, 1.006, 1.006);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#D2F0F8").s().p("AgcAPQgGAAgEgEQgFgFAAgGQAAgFAFgEQAEgFAGAAIA5AAQAHAAAEAFQAEAEAAAFQAAAGgEAFQgEAEgHAAg");
        this.shape_4.setTransform(54.5, 50.1, 1.006, 1.006);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#D2F0F8").s().p("AghAPQAKgEAGgFQALgHAGgNIAUAAQAGAAAEAFQAEAEABAFQgBAGgEAEQgEAFgGAAg");
        this.shape_5.setTransform(55.5, 44.2, 1.006, 1.006);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#D2F0F8").s().p("AgIAPQgCgPgJgKIgDgEIAeAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAg");
        this.shape_6.setTransform(56.7, 38.4, 1.006, 1.006);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(80));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_0 = new cjs.Graphics().p("Ah2A1IAAhpIDtAAIAABpg");
        var mask_graphics_1 = new cjs.Graphics().p("Ah2BOIAAibIDtAAIAACbg");
        var mask_graphics_2 = new cjs.Graphics().p("Ah2BnIAAjNIDtAAIAADNg");
        var mask_graphics_3 = new cjs.Graphics().p("Ah2CBIAAkBIDtAAIAAEBg");
        var mask_graphics_4 = new cjs.Graphics().p("Ah2CaIAAkzIDtAAIAAEzg");
        var mask_graphics_5 = new cjs.Graphics().p("Ah2CzIAAlmIDtAAIAAFmg");
        var mask_graphics_6 = new cjs.Graphics().p("Ah2DNIAAmZIDtAAIAAGZg");
        var mask_graphics_7 = new cjs.Graphics().p("AiFDNIAAmZIELAAIAAGZg");
        var mask_graphics_8 = new cjs.Graphics().p("AiTDNIAAmZIEnAAIAAGZg");
        var mask_graphics_9 = new cjs.Graphics().p("AiiDNIAAmZIFFAAIAAGZg");
        var mask_graphics_10 = new cjs.Graphics().p("AixDNIAAmZIFjAAIAAGZg");
        var mask_graphics_11 = new cjs.Graphics().p("AjADNIAAmZIGBAAIAAGZg");
        var mask_graphics_12 = new cjs.Graphics().p("AkBEyIAApiIIDAAIAAJig");
        var mask_graphics_13 = new cjs.Graphics().p("AlBGWIAAsrIKDAAIAAMrg");
        var mask_graphics_14 = new cjs.Graphics().p("AmCH7IAAv1IMFAAIAAP1g");
        var mask_graphics_15 = new cjs.Graphics().p("AmAH7IgUhJIAAusIMVAAIACAGIAAAnIASBDIAABuIgSBCIAALCIhEATg");
        var mask_graphics_16 = new cjs.Graphics().p("Al9H7Igog3IAAu+IMkAAIADAFIAAAnIAkAyIAABwIgkAzIAALPIgzAlg");
        var mask_graphics_17 = new cjs.Graphics().p("Al7H7Ig8glIAAvQIMzAAIAFAEIAAAnIA3AiIAAByIg3AiIAALdIgiA3g");
        var mask_graphics_18 = new cjs.Graphics().p("Al4H7IhQgSIAAvjINCAAIAGACIAAApIBJARIAAB0IhJARIAALqIgRBKg");
        var mask_graphics_19 = new cjs.Graphics().p("AnaH7IAAv1INZAAIAAAqIBcAAIAAB3IhcAAIAANUg");
        var mask_graphics_20 = new cjs.Graphics().p("AnnIIIAAwPINwAAIAAArIBfAAIAAB5IhfAAIAANrg");
        var mask_graphics_21 = new cjs.Graphics().p("AnzIWIAAwrIOHAAIAAAsIBgAAIAAB9IhgAAIAAOCg");
        var mask_graphics_22 = new cjs.Graphics().p("AoAIjIAAxFIOeAAIAAAuIBjAAIAAB/IhjAAIAAOYg");
        var mask_graphics_23 = new cjs.Graphics().p("AoNIxIAAxhIO1AAIAAAvIBmAAIAACDIhmAAIAAOvg");
        var mask_graphics_24 = new cjs.Graphics().p("AoZI+IAAx7IPMAAIAAAvIBnAAIAACHIhnAAIAAPFg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: mask_graphics_0, x: 0.7, y: 95.3 }).wait(1).to({ graphics: mask_graphics_1, x: 1.1, y: 92.8 }).wait(1).to({ graphics: mask_graphics_2, x: 1.5, y: 90.2 }).wait(1).to({ graphics: mask_graphics_3, x: 1.9, y: 87.7 }).wait(1).to({ graphics: mask_graphics_4, x: 2.3, y: 85.2 }).wait(1).to({ graphics: mask_graphics_5, x: 2.8, y: 82.7 }).wait(1).to({ graphics: mask_graphics_6, x: 3.2, y: 80.2 }).wait(1).to({ graphics: mask_graphics_7, x: 4.7, y: 80.2 }).wait(1).to({ graphics: mask_graphics_8, x: 6.1, y: 80.2 }).wait(1).to({ graphics: mask_graphics_9, x: 7.6, y: 80.2 }).wait(1).to({ graphics: mask_graphics_10, x: 9.1, y: 80.2 }).wait(1).to({ graphics: mask_graphics_11, x: 10.6, y: 80.2 }).wait(1).to({ graphics: mask_graphics_12, x: 17, y: 80.2 }).wait(1).to({ graphics: mask_graphics_13, x: 23.5, y: 80.2 }).wait(1).to({ graphics: mask_graphics_14, x: 30, y: 80.2 }).wait(1).to({ graphics: mask_graphics_15, x: 31.7, y: 80.2 }).wait(1).to({ graphics: mask_graphics_16, x: 33.5, y: 80.2 }).wait(1).to({ graphics: mask_graphics_17, x: 35.3, y: 80.2 }).wait(1).to({ graphics: mask_graphics_18, x: 37, y: 80.2 }).wait(1).to({ graphics: mask_graphics_19, x: 38.8, y: 80.2 }).wait(1).to({ graphics: mask_graphics_20, x: 38.8, y: 80.2 }).wait(1).to({ graphics: mask_graphics_21, x: 38.8, y: 80.2 }).wait(1).to({ graphics: mask_graphics_22, x: 38.8, y: 80.2 }).wait(1).to({ graphics: mask_graphics_23, x: 38.8, y: 80.2 }).wait(1).to({ graphics: mask_graphics_24, x: 38.8, y: 80.2 }).wait(56));
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#3787AA").s().p("AmvElQgGgDgCgGQgCgGADgFIB7jvQAEgGAGgBQAHgCAGAFICXB4IFqmmQAEgFAHAAQAHAAAEAFIBJBRIBJhJIgjAAQgHAAgEgEQgEgFAAgGQAAgGAEgEQAEgFAHAAIBHAAQAGAAAFAFQAEAEAAAGIAABGQAAAGgEAEQgFAEgGAAQgGAAgEgEQgFgEAAgGIAAgiIhUBUQgEAEgHAAQgGAAgFgFIhIhQIloGlQgDAEgHABQgGABgEgEIiVh3IhyDeQgDAGgGACIgEABQgEAAgDgCg");
        this.shape_7.setTransform(45, 60.4, 1.006, 1.006);
        var maskedShapeInstanceList = [this.shape_7];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(80));
        this.instance = new lib.m2_2();
        this.instance.parent = this;
        this.instance.setTransform(56, 0);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({ y: 24.4 }, 10).wait(31));
        this.instance_1 = new lib.m2_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(50.1, 1.6);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({ y: 26 }, 10).wait(31));
        this.instance_2 = new lib.anim9("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(54.5, 14.8);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({ startPosition: 0 }, 0).to({ scaleX: 0.73, scaleY: 0.73, y: 30 }, 10).wait(31));
        this.instance_3 = new lib.m1_2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(41.3, 8.9, 1, 1, 0, 0, 0, 1.5, 4.4);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({ y: 26.9 }, 10).wait(21));
        this.instance_4 = new lib.m1_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(35.4, 9.6, 1, 1, 0, 0, 0, 1.5, 3.6);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({ y: 27.6 }, 10).wait(21));
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#7DB1CA").s().p("AgoAqQgSgSABgYQgBgXASgRQAQgSAYAAQAZAAARASQAQARABAXQgBAYgQASQgRARgZAAQgYAAgQgRg");
        this.shape_8.setTransform(38.3, 20.7, 1.006, 1.006);
        this.instance_5 = new lib.anim13("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(38.3, 20.7);
        this.instance_5._off = true;
        this.instance_6 = new lib.anim14("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(38.3, 30.5, 0.487, 0.487);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_8 }] }).to({ state: [{ t: this.instance_5 }] }, 49).to({ state: [{ t: this.instance_6 }] }, 10).wait(21));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({ _off: false }, 0).to({ _off: true, scaleX: 0.49, scaleY: 0.49, y: 30.5 }, 10).wait(21));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(45.7, 45, 65.6, 90);
    lib.properties = {
        width: 90,
        height: 90,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init1() {
    canvas = document.getElementById("canvas1");
    anim_container = document.getElementById("animation_container1");
    dom_overlay_container = document.getElementById("dom_overlay_container1");
    handleComplete1();
})();
function handleComplete1() {
    exportRoot = new lib.money();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}
(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        }
        else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    (lib.anim4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("Ai3DRQgLgJAAgOIAAgRQAAgXAOgVQAPgWAZgHIA4gPQAJgCABgDIAAgiQgdgigBgxIAAgNQgPg7AAgYQAAgaAPgSQAPgSAYgCQAVgQAeAAQARABAhAIQAkAIAQgBIAEAAIABAAIABAAIABAAIAAAAIABABIAAAAIABAAIABABIAAAAIABABIAAAAIACACIAAABIABABIABABIAAAAQAIASACAeQAEArgNAoIAAAXQAAAwgdAjIgBAAIAAAfQABADAJADIA4APIABAAQAZAHAPAWQAOAUAAAYIAAAQQAAANgLAKQgKAJgNgBIlBACQgNAAgKgJgAiFB7QgPAEgJAPQgJANAAAOIAAARIABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAICTgBIAAgmIhFgogAAOCWIAAAmICTAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgBIAAgRQAAgPgIgNQgJgOgQgEIgygNgAguBMQAAAKgHAIIA1AgIA2gfQgIgJAAgKIAAgIQgWANgYAAQgYAAgWgNgAhLguIAAAFQAAAmAXAbQAWAdAegBQAfAAAWgbQAXgaAAgmIAAgiQhBgYhLgBQgLAiAAASgAhJh+QBYAABFAaQAFgmgJgjIgBAAQgQABghgJQgegHgNAAQgXgBgPANIAAAAIgBABIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAQgQAAgIAMQgGAKAAAOIACAXIABgDIAAgBIABgBIAAgBIAAAAIADgDIABAAIABgCIACgBIACAAIAAAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABPA8QgegMgngJQgugKgwAAQgGgOAEgUQADgOAIgIQADgFADgBIgCgFQgDgGACgCIABAAQARgOAYgBQARAAAbAGIAhAIQATADANgCQAGAPADAZQADAhgIAjg");
        this.shape_1.setTransform(0.8, -14.2, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgcAjIAAgSQAAgOALgJIAigcQAMARAAATIAAAQQAAAHgEAFQgFAFgHAAg");
        this.shape_2.setTransform(14.8, 16.6, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAlIgHgBQgKgFAAgKIAAgQQAAgXAPgSIAnAgQALAJAAAOIAAASg");
        this.shape_3.setTransform(-15.1, 16.4, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiuAxQgGgFAAgHIAAgQQAAgUAMgQQAMgRAUgGIA6gPIBOAwIBRgwIA4AOQAUAGAMASQAMAPAAAUIAAAQQAAAHgGAGQgGAFgIAAIlBAAQgIAAgGgFg");
        this.shape_4.setTransform(-0.3, 14.8, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgrA0QgXgfAAgnQAAgQAIgdIAHgaQA7ABA7APQg6gIggAHIgGAIQgGAQACAuQAAAdAQAbQANAYAQANQgggFgXggg");
        this.shape_5.setTransform(-2.6, -2.4, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag/A5QgaghAAgqQAAgQAIgdIAHgaQBVAABPAfIAAArQAAApgaAgQgbAfglABQgkAAgbghg");
        this.shape_6.setTransform(-0.3, -2.4, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhXBDQgPg2AAgbQAAgWAMgOQANgOAUAAQAagVAwAKQA/AMAMgBQAHAOACAZQAEAigIAiIgEgCQhPgfhVAAIgIAaQgHAbgBAQg");
        this.shape_7.setTransform(-0.6, -12.4, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag+AUQAFgFABgHIAAgkIB3AAIAAAGQgMAXgWANQgXAPgaAAQgXAAgTgJg");
        this.shape_8.setTransform(-0.6, 6.7, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhPABQAKgEACgCQAUAIAWAAQAaAAAYgNQAWgOAMgYIABAeQAAAOAUAFIhQAwg");
        this.shape_9.setTransform(-0.2, 9.3, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AhPAEQASgHAAgLIAAglIB4AAIABAkQAAAOAUAFIhQAwg");
        this.shape_10.setTransform(-0.2, 9, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.4, -21.7, 38.9, 43.5);
    (lib.anim3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("Ai3DRQgLgJAAgOIAAgRQAAgXAOgVQAPgWAZgHIA4gPQAJgCABgDIAAgiQgdgigBgxIAAgNQgPg7AAgYQAAgaAPgSQAPgSAYgCQAVgQAeAAQARABAhAIQAkAIAQgBIAEAAIABAAIABAAIABAAIAAAAIABABIAAAAIABAAIABABIAAAAIABABIAAAAIACACIAAABIABABIABABIAAAAQAIASACAeQAEArgNAoIAAAXQAAAwgdAjIgBAAIAAAfQABADAJADIA4APIABAAQAZAHAPAWQAOAUAAAYIAAAQQAAANgLAKQgKAJgNgBIlBACQgNAAgKgJgAiFB7QgPAEgJAPQgJANAAAOIAAARIABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAICTgBIAAgmIhFgogAAOCWIAAAmICTAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgBIAAgRQAAgPgIgNQgJgOgQgEIgygNgAguBMQAAAKgHAIIA1AgIA2gfQgIgJAAgKIAAgIQgWANgYAAQgYAAgWgNgAhLguIAAAFQAAAmAXAbQAWAdAegBQAfAAAWgbQAXgaAAgmIAAgiQhBgYhLgBQgLAiAAASgAhJh+QBYAABFAaQAFgmgJgjIgBAAQgQABghgJQgegHgNAAQgXgBgPANIAAAAIgBABIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAQgQAAgIAMQgGAKAAAOIACAXIABgDIAAgBIABgBIAAgBIAAAAIADgDIABAAIABgCIACgBIACAAIAAAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABPA8QgegMgngJQgugKgwAAQgGgOAEgUQADgOAIgIQADgFADgBIgCgFQgDgGACgCIABAAQARgOAYgBQARAAAbAGIAhAIQATADANgCQAGAPADAZQADAhgIAjg");
        this.shape_1.setTransform(0.8, -14.2, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgcAjIAAgSQAAgOALgJIAigcQAMARAAATIAAAQQAAAHgEAFQgFAFgHAAg");
        this.shape_2.setTransform(14.8, 16.6, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAlIgHgBQgKgFAAgKIAAgQQAAgXAPgSIAnAgQALAJAAAOIAAASg");
        this.shape_3.setTransform(-15.1, 16.4, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiuAxQgGgFAAgHIAAgQQAAgUAMgQQAMgRAUgGIA6gPIBOAwIBRgwIA4AOQAUAGAMASQAMAPAAAUIAAAQQAAAHgGAGQgGAFgIAAIlBAAQgIAAgGgFg");
        this.shape_4.setTransform(-0.3, 14.8, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgrA0QgXgfAAgnQAAgQAIgdIAHgaQA7ABA7APQg6gIggAHIgGAIQgGAQACAuQAAAdAQAbQANAYAQANQgggFgXggg");
        this.shape_5.setTransform(-2.6, -2.4, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag/A5QgaghAAgqQAAgQAIgdIAHgaQBVAABPAfIAAArQAAApgaAgQgbAfglABQgkAAgbghg");
        this.shape_6.setTransform(-0.3, -2.4, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhXBDQgPg2AAgbQAAgWAMgOQANgOAUAAQAagVAwAKQA/AMAMgBQAHAOACAZQAEAigIAiIgEgCQhPgfhVAAIgIAaQgHAbgBAQg");
        this.shape_7.setTransform(-0.6, -12.4, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag+AUQAFgFABgHIAAgkIB3AAIAAAGQgMAXgWANQgXAPgaAAQgXAAgTgJg");
        this.shape_8.setTransform(-0.6, 6.7, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhPABQAKgEACgCQAUAIAWAAQAaAAAYgNQAWgOAMgYIABAeQAAAOAUAFIhQAwg");
        this.shape_9.setTransform(-0.2, 9.3, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AhPAEQASgHAAgLIAAglIB4AAIABAkQAAAOAUAFIhQAwg");
        this.shape_10.setTransform(-0.2, 9, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.4, -21.7, 38.9, 43.5);
    (lib.anim2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("Ai3DRQgLgKAAgNIAAgQQAAgYAOgUQAPgXAZgGIAAgBIA4gPQAJgCABgDIAAghQgdglAAgvIAAgNQgPg7AAgXQAAgbAPgSQAPgSAXgCQAWgQAdABQARAAAiAIQAlAJAOgCIAEAAIABAAIABAAIACABIABAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIAAAAIABABIAAABIABABQAIASACAeQAEArgNApIAAAXQAAAvgdAjIAAAAIAAAgQABACAJADIA4APIAAAAQAZAGAPAXQAOAVAAAXIAAARQAAAOgLAIQgJAIgOABIlBAAQgNABgKgJgAAOCXIAAAmICTgBQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIABgBIAAgRQAAgPgJgMQgJgOgPgFIgzgNgAiFB8QgPAEgJAOQgIANAAAPIAAAQIABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAICTAAIAAgmIhEgpgAguBMQAAAKgHAJIA1AfIA2gfQgHgJAAgKIAAgHQgXAMgYAAQgYAAgWgNgAhLguIAAAFQAAAmAXAcQAXAcAdAAQAeAAAXgbQAXgaAAgmIAAgjQhCgYhKgBQgLAiAAASgAhJh+QBXAABGAaQAGgmgKgiIAAAAQgRAAghgJQgegHgNAAQgXAAgPAMIAAAAIgBABIgBABIgBAAIAAAAIgBAAIgBABIgBAAIgBAAIgCAAQgPAAgIAMQgHAKAAAPQAAAIACAOIABgDIABgBIAAAAIABgCIABgCIABAAIABgCIABAAIABAAIABgBIABAAIAAgBIABAAIABAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABPA8QgggNglgIQgugKgwAAQgGgOAEgUQADgOAIgIQADgEADgCIgCgFQgDgFACgCIABAAQARgOAYgBQAQgBAcAGIAhAIQATADANgCQAGAPADAZQADAhgIAjg");
        this.shape_1.setTransform(1.2, -14.2, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgcAjIAAgSQAAgOALgJIAigcQAMARAAATIAAAQQAAAHgEAEQgFAFgHABg");
        this.shape_2.setTransform(15.2, 16.7, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAlIgHgBQgKgFAAgKIAAgQQAAgXAPgSIAmAgQAMAJAAAOIAAASg");
        this.shape_3.setTransform(-14.7, 16.5, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiuAyQgGgGAAgHIAAgQQAAgUAMgQQAMgRAUgGIA4gPIACgBIBOAxIBRgwIA4APQAUAFAMARQAMARAAATIAAAQQAAAHgGAGQgGAEgIAAIlBABQgIAAgGgEg");
        this.shape_4.setTransform(0, 14.9, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgrA1QgXgfAAgoQAAgQAIgdIAIgZQA3AAA+APQg8gIgeAHIgGAHQgGARACAuQAAAcAQAcQANAXARAOQghgFgXgfg");
        this.shape_5.setTransform(-2.3, -2.4, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag/A4QgaggAAgqQAAgRAIgcIAHgaQAzAAAzAMQAjAJAbALIAAApQAAArgaAfQgbAgglAAQgkAAgbgig");
        this.shape_6.setTransform(0, -2.3, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhXBDQgPg2AAgaQAAgWAMgOQAMgPAVAAQAagVAwAKQBAAMALgBQAHAOACAZQAEAigIAiIgEgBQgbgLgjgJQgzgMgzAAIgIAaQgHAbgBAQg");
        this.shape_7.setTransform(-0.2, -12.4, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag+ATQAFgEAAgIIAAgjIB5AAIAAAGQgMAXgXAOQgXAOgbAAQgVAAgUgKg");
        this.shape_8.setTransform(-0.3, 6.8, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhPAAQAHAAAFgGQAUAJAWAAQAbAAAXgNQAWgOAMgYIABAeQAAAOAUAFIhQAwg");
        this.shape_9.setTransform(0.1, 9.4, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AhPADQASgEAAgOIAAgkIB4AAIABAkQAAAOAUAFIhQAwg");
        this.shape_10.setTransform(0.1, 9.1, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.4, -21.7, 39, 43.5);
    (lib.anim1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("Ai3DRQgLgKAAgNIAAgQQAAgYAOgUQAPgXAZgGIAAgBIA4gPQAJgCABgDIAAghQgdglAAgvIAAgNQgPg7AAgXQAAgbAPgSQAPgSAXgCQAWgQAdABQARAAAiAIQAlAJAOgCIAEAAIABAAIABAAIACABIABAAIAAABIABAAIABABIABAAIAAABIABAAIAAABIAAAAIABABIAAABIABABQAIASACAeQAEArgNApIAAAXQAAAvgdAjIAAAAIAAAgQABACAJADIA4APIAAAAQAZAGAPAXQAOAVAAAXIAAARQAAAOgLAIQgJAIgOABIlBAAQgNABgKgJgAAOCXIAAAmICTgBQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIABgBIAAgRQAAgPgJgMQgJgOgPgFIgzgNgAiFB8QgPAEgJAOQgIANAAAPIAAAQIABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAICTAAIAAgmIhEgpgAguBMQAAAKgHAJIA1AfIA2gfQgHgJAAgKIAAgHQgXAMgYAAQgYAAgWgNgAhLguIAAAFQAAAmAXAcQAXAcAdAAQAeAAAXgbQAXgaAAgmIAAgjQhCgYhKgBQgLAiAAASgAhJh+QBXAABGAaQAGgmgKgiIAAAAQgRAAghgJQgegHgNAAQgXAAgPAMIAAAAIgBABIgBABIgBAAIAAAAIgBAAIgBABIgBAAIgBAAIgCAAQgPAAgIAMQgHAKAAAPQAAAIACAOIABgDIABgBIAAAAIABgCIABgCIABAAIABgCIABAAIABAAIABgBIABAAIAAgBIABAAIABAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABPA8QgggNglgIQgugKgwAAQgGgOAEgUQADgOAIgIQADgEADgCIgCgFQgDgFACgCIABAAQARgOAYgBQAQgBAcAGIAhAIQATADANgCQAGAPADAZQADAhgIAjg");
        this.shape_1.setTransform(1.2, -14.2, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgcAjIAAgSQAAgOALgJIAigcQAMARAAATIAAAQQAAAHgEAEQgFAFgHABg");
        this.shape_2.setTransform(15.2, 16.7, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAlIgHgBQgKgFAAgKIAAgQQAAgXAPgSIAmAgQAMAJAAAOIAAASg");
        this.shape_3.setTransform(-14.7, 16.5, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AiuAyQgGgGAAgHIAAgQQAAgUAMgQQAMgRAUgGIA4gPIACgBIBOAxIBRgwIA4APQAUAFAMARQAMARAAATIAAAQQAAAHgGAGQgGAEgIAAIlBABQgIAAgGgEg");
        this.shape_4.setTransform(0, 14.9, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgrA1QgXgfAAgoQAAgQAIgdIAIgZQA3AAA+APQg8gIgeAHIgGAHQgGARACAuQAAAcAQAcQANAXARAOQghgFgXgfg");
        this.shape_5.setTransform(-2.3, -2.4, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag/A4QgaggAAgqQAAgRAIgcIAHgaQAzAAAzAMQAjAJAbALIAAApQAAArgaAfQgbAgglAAQgkAAgbgig");
        this.shape_6.setTransform(0, -2.3, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhXBDQgPg2AAgaQAAgWAMgOQAMgPAVAAQAagVAwAKQBAAMALgBQAHAOACAZQAEAigIAiIgEgBQgbgLgjgJQgzgMgzAAIgIAaQgHAbgBAQg");
        this.shape_7.setTransform(-0.2, -12.4, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag+ATQAFgEAAgIIAAgjIB5AAIAAAGQgMAXgXAOQgXAOgbAAQgVAAgUgKg");
        this.shape_8.setTransform(-0.3, 6.8, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhPAAQAHAAAFgGQAUAJAWAAQAbAAAXgNQAWgOAMgYIABAeQAAAOAUAFIhQAwg");
        this.shape_9.setTransform(0.1, 9.4, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("AhPADQASgEAAgOIAAgkIB4AAIABAkQAAAOAUAFIhQAwg");
        this.shape_10.setTransform(0.1, 9.1, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.4, -21.7, 39, 43.5);
    (lib.partners = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_39 = new cjs.Graphics().p("AhCCTIAAklICFAAIAAElg");
        var mask_graphics_40 = new cjs.Graphics().p("AhsCTIAAklIDZAAIAAElg");
        var mask_graphics_41 = new cjs.Graphics().p("AiXCTIAAklIEuAAIAAElg");
        var mask_graphics_42 = new cjs.Graphics().p("AjBCTIAAklIGDAAIAAElg");
        var mask_graphics_43 = new cjs.Graphics().p("AhlCdIhAgrIAAgbIg3hUIAAifICKAAIAeAUIDxAAIAgAwIAAD1g");
        var mask_graphics_44 = new cjs.Graphics().p("AhpCnIgghWIAAgeIhvgqIAAivICYAAIAPAoIEKAAIBAAYIAAENg");
        var mask_graphics_45 = new cjs.Graphics().p("AhtCxIAAiiIinAAIAAi/ICnAAIAAA8IGCAAIAAElg");
        var mask_graphics_46 = new cjs.Graphics().p("AghDOIg8gnIAAgmIg3hVIgBAAIhig/IgUAAIgZgmIAAiUIC0AAIACABIAABCIAwAfIArAAIAeAUID9AAIAdAtIAAD4g");
        var mask_graphics_47 = new cjs.Graphics().p("AguDrIgehOIAAgpIhvgrIgBAAIgxh/IgWAAIgygTIAAigIDGAAIAAABIAABIIAYA+IAwAAIAPAnIETAAIA7AXIAAEPg");
        var mask_graphics_48 = new cjs.Graphics().p("Ag8EHIAAihIimAAIAAi/IhjAAIAAiuIDVAAIAACuIA0AAIAAA7IGCAAIAAElg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(39).to({ graphics: mask_graphics_39, x: 61.8, y: 84.3 }).wait(1).to({ graphics: mask_graphics_40, x: 57.5, y: 84.3 }).wait(1).to({ graphics: mask_graphics_41, x: 53.4, y: 84.3 }).wait(1).to({ graphics: mask_graphics_42, x: 49.1, y: 84.3 }).wait(1).to({ graphics: mask_graphics_43, x: 46.4, y: 83.3 }).wait(1).to({ graphics: mask_graphics_44, x: 43.6, y: 82.3 }).wait(1).to({ graphics: mask_graphics_45, x: 40.8, y: 81.3 }).wait(1).to({ graphics: mask_graphics_46, x: 39.2, y: 78.4 }).wait(1).to({ graphics: mask_graphics_47, x: 37.5, y: 75.6 }).wait(1).to({ graphics: mask_graphics_48, x: 35.9, y: 72.7 }).wait(32));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AC5DCQhLAAhFgcQhDgcg1g1Qgvgvgcg5Qgbg7gHhAIgfAnQgFAFgGAAQgFAAgEgDQgEgEgBgGQAAgGADgEIA1hDIAFgDQADgCAEAAIABAAQAIAAAEAHIA+AyQAEAEABAFQAAAGgDAEQgEAFgGABQgGABgEgEIgpghQANCEBjBaQBiBbCHAAIAAAAQAaAAASgDQAFAAAFADQAFAEAAAFQABAGgEAFQgDAFgGAAQgXADgYAAg");
        this.shape.setTransform(30.5, 66.1, 0.999, 0.999);
        this.shape._off = true;
        var maskedShapeInstanceList = [this.shape];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(39).to({ _off: false }, 0).wait(41));
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_25 = new cjs.Graphics().p("AhMC0IAAlnICaAAIAAFng");
        var mask_1_graphics_26 = new cjs.Graphics().p("AhsC0IAAlnIDZAAIAAFng");
        var mask_1_graphics_27 = new cjs.Graphics().p("AiMC0IAAlnIEZAAIAAFng");
        var mask_1_graphics_28 = new cjs.Graphics().p("AisC0IAAlnIFZAAIAAFng");
        var mask_1_graphics_29 = new cjs.Graphics().p("AirC0Igkg2IAAkxIElAAIAyAhIAEAAIBEBoIAACvIgTAdIiBAAIgcASg");
        var mask_1_graphics_30 = new cjs.Graphics().p("AirC0IhGgbIAAlMIE+AAIAZBAIAFAAICHA1IAAC/IgkAPIiOAAIgOAkg");
        var mask_1_graphics_31 = new cjs.Graphics().p("AkUC0IAAlnIFZAAIAABhIDQAAIAADPIjQAAIAAA3g");
        var mask_1_graphics_32 = new cjs.Graphics().p("ACdC2IgvggIAAAKIgBAAIiqAAIgbASIirAAIgthCIAAklIEcAAIAuAhIAaAAIAtBAIAhAAIA9ApIBiAAIAQAYIAADCIgLAHg");
        var mask_1_graphics_33 = new cjs.Graphics().p("ACwDTIgYhBIAAggIgBgCIi8AAIgNAkIi/AAIhbggIAAlHIE7AAIAXBBIAdAAIBaAgIAlAAIAeBUIBtAAIAgALIAADZIgFANg");
        var mask_1_graphics_34 = new cjs.Graphics().p("ADBDxIAAixIjPAAIAAA3IlaAAIAAlnIFaAAIAABhIDPAAIAAB9ICoAAIAAEDg");
        this.timeline.addTween(cjs.Tween.get(mask_1).to({ graphics: null, x: 0, y: 0 }).wait(25).to({ graphics: mask_1_graphics_25, x: 27.6, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_26, x: 30.8, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_27, x: 34, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_28, x: 37.2, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_29, x: 40.6, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_30, x: 44.1, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_31, x: 47.6, y: 14.8 }).wait(1).to({ graphics: mask_1_graphics_32, x: 50.4, y: 15 }).wait(1).to({ graphics: mask_1_graphics_33, x: 53.1, y: 18 }).wait(1).to({ graphics: mask_1_graphics_34, x: 55.9, y: 20.9 }).wait(46));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#3787AA").s().p("ADQCqIhGgxQgFgDgBgGQgBgFADgFQAEgFAFgBQAGgBAFADIApAdQgah2hfhMQhehMh6AAIgBAAQg9ABg3ASQgFADgFgDQgGgDgCgFQgCgFADgFQADgGAFgCQA9gVBAAAIABAAQCEAABnBTQBmBTAcB/IAegqQADgFAGgBQAFgBAFADQAFAEABAFQABAGgDAFIgxBGQgDAFgGABIgCAAQgEAAgEgCg");
        this.shape_1.setTransform(63.3, 27.8, 0.999, 0.999);
        this.shape_1._off = true;
        var maskedShapeInstanceList = [this.shape_1];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25).to({ _off: false }, 0).wait(55));
        this.instance = new lib.anim1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(49, 45);
        this.instance_1 = new lib.anim2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.4, 21.8);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 19).to({ state: [{ t: this.instance_1 }] }, 60).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true, x: 20.4, y: 21.8 }, 19, cjs.Ease.get(-1)).wait(61));
        this.instance_2 = new lib.anim3("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(49, 45);
        this.instance_3 = new lib.anim4("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(77.7, 68.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [{ t: this.instance_3 }] }, 19).to({ state: [{ t: this.instance_3 }] }, 60).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ _off: true, x: 77.7, y: 68.3 }, 19, cjs.Ease.get(-1)).wait(61));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(78.6, 68.3, 39, 43.5);
    lib.properties = {
        width: 98,
        height: 90,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init2() {
    canvas = document.getElementById("canvas2");
    anim_container = document.getElementById("animation_container2");
    dom_overlay_container = document.getElementById("dom_overlay_container2");
    handleComplete2();
})();
function handleComplete2() {
    exportRoot = new lib.partners();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}
(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        }
        else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    (lib.anim6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AixDKQgKgJAAgNIAAgQQAAgWANgUQAPgWAXgHIABAAIA2gOQAJgCAAgEIAAggQgcgjAAgtIAAgMQgOg6AAgXQAAgZAOgSQAOgRAXgCQAVgPAdAAQAQABAgAIQAkAIAOgCIAEAAIAAAAIACAAIABABIAAAAIABAAIABAAIABACIABAAIACACIAAABIAAABIABAAIAAABQAIARADAeQADApgMAnIAAAWQAAAugdAiIAAAeQABADAJADIA2AOQAYAHAPAVQANAUAAAXIAAAPQAAAOgKAIQgJAJgNAAIk3AAQgNAAgJgIgAiAB4QgPAEgJAOQgIAMAAAOIAAAQIABACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAICOAAIAAglIhBgngAANCSIAAAlICPgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIABgCIAAgPQAAgPgIgMQgJgOgPgEIgxgMgAgsBJQAAAKgHAIIAzAfIA0geQgIgJAAgKIAAgHQgUANgYAAQgXAAgVgNgAhJgsIAAAFQABAlAWAaQAWAbAcAAQAeAAAWgaQAVgZABglIAAghQhDgXhEgBQgMAdAAAVgAhGh5QBSAABFAZQAFgmgJggIAAAAQgNAAgjgIQgdgHgNAAQgWgBgOAMIgBABIgBABIgBAAIAAAAIgCAAIAAABIgBAAIgBAAIgCAAQgMAAgJAJQgIALAAAPQAAALACALIABgDIAAgBIAAAAIACgCIAAAAIABgBIAAAAIABgBIABAAIAAgBIABAAIAAgBIABAAIABAAIAAgBIACAAIAAAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QghgNgigHQgugKgsAAQgGgPAEgSQADgNAHgIQADgEADgCQgFgJADgDIAAAAQARgNAXgBQAQgBAaAGIAgAIQATADAMgCQAGAOADAYQADAggIAig");
        this.shape_1.setTransform(1.1, -13.6, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgPALgIIAhgbQALAQAAATIAAAQQAAAGgEAEQgFAFgHABg");
        this.shape_2.setTransform(14.6, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgOAkIgHgBQgKgFAAgKIAAgQQAAgVAPgSIAlAfQALAIAAAPIAAARg");
        this.shape_3.setTransform(-14.3, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAwQgFgFgBgHIAAgQQABgTAKgPQAMgSATgFIA4gOIBMAuIBOguIA2ANQAUAGAMARQAKAPABAUIAAAPQgBAHgFAFQgGAFgHAAIk3AAQgHAAgGgEg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgXgfAAglQAAgQAIgcIAHgYQA4AAA6APQg4gIgfAGIgGAHQgGAQACAtQAAAcAQAbQAMAWAQANQgggEgVgfg");
        this.shape_5.setTransform(-2.2, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag8A3QgaggAAgoQAAgQAIgcIAHgZQBQAABOAeIAAApQAAApgaAeQgZAfgkAAIAAAAQgjAAgZggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhTBAQgPg0AAgZQAAgVAMgOQAMgOATAAQAZgUAuAJQA+ANAMgCQAGAOACAYQAEAggIAiIgEgCQhOgehQAAIgIAYQgHAbAAAQg");
        this.shape_7.setTransform(-0.3, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag9ATQAGgEAAgIIAAgiIB0AAIABAFQgNAXgVANQgXAOgZAAQgUAAgVgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAJgDADgDQAUAIAUAAQAaAAAWgNQAWgNAMgXIAAAdQAAAIAIAGQAFADAGABIhNAug");
        this.shape_9.setTransform(0.1, 9.1, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMAEQARgHAAgLIAAgjIB0AAIABAjQAAAIAIAFQAFADAGACIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -21, 37.6, 42);
    (lib.anim5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AixDKQgKgJAAgNIAAgQQAAgWANgUQAPgWAXgHIABAAIA2gOQAJgCAAgEIAAggQgcgjAAgtIAAgMQgOg6AAgXQAAgZAOgSQAOgRAXgCQAVgPAdAAQAQABAgAIQAkAIAOgCIAEAAIAAAAIACAAIABABIAAAAIABAAIABAAIABACIABAAIACACIAAABIAAABIABAAIAAABQAIARADAeQADApgMAnIAAAWQAAAugdAiIAAAeQABADAJADIA2AOQAYAHAPAVQANAUAAAXIAAAPQAAAOgKAIQgJAJgNAAIk3AAQgNAAgJgIgAiAB4QgPAEgJAOQgIAMAAAOIAAAQIABACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAICOAAIAAglIhBgngAANCSIAAAlICPgBQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAAAIABgCIAAgPQAAgPgIgMQgJgOgPgEIgxgMgAgsBJQAAAKgHAIIAzAfIA0geQgIgJAAgKIAAgHQgUANgYAAQgXAAgVgNgAhJgsIAAAFQABAlAWAaQAWAbAcAAQAeAAAWgaQAVgZABglIAAghQhDgXhEgBQgMAdAAAVgAhGh5QBSAABFAZQAFgmgJggIAAAAQgNAAgjgIQgdgHgNAAQgWgBgOAMIgBABIgBABIgBAAIAAAAIgCAAIAAABIgBAAIgBAAIgCAAQgMAAgJAJQgIALAAAPQAAALACALIABgDIAAgBIAAAAIACgCIAAAAIABgBIAAAAIABgBIABAAIAAgBIABAAIAAgBIABAAIABAAIAAgBIACAAIAAAAg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QghgNgigHQgugKgsAAQgGgPAEgSQADgNAHgIQADgEADgCQgFgJADgDIAAAAQARgNAXgBQAQgBAaAGIAgAIQATADAMgCQAGAOADAYQADAggIAig");
        this.shape_1.setTransform(1.1, -13.6, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgPALgIIAhgbQALAQAAATIAAAQQAAAGgEAEQgFAFgHABg");
        this.shape_2.setTransform(14.6, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgOAkIgHgBQgKgFAAgKIAAgQQAAgVAPgSIAlAfQALAIAAAPIAAARg");
        this.shape_3.setTransform(-14.3, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAwQgFgFgBgHIAAgQQABgTAKgPQAMgSATgFIA4gOIBMAuIBOguIA2ANQAUAGAMARQAKAPABAUIAAAPQgBAHgFAFQgGAFgHAAIk3AAQgHAAgGgEg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgXgfAAglQAAgQAIgcIAHgYQA4AAA6APQg4gIgfAGIgGAHQgGAQACAtQAAAcAQAbQAMAWAQANQgggEgVgfg");
        this.shape_5.setTransform(-2.2, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag8A3QgaggAAgoQAAgQAIgcIAHgZQBQAABOAeIAAApQAAApgaAeQgZAfgkAAIAAAAQgjAAgZggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhTBAQgPg0AAgZQAAgVAMgOQAMgOATAAQAZgUAuAJQA+ANAMgCQAGAOACAYQAEAggIAiIgEgCQhOgehQAAIgIAYQgHAbAAAQg");
        this.shape_7.setTransform(-0.3, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag9ATQAGgEAAgIIAAgiIB0AAIABAFQgNAXgVANQgXAOgZAAQgUAAgVgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAJgDADgDQAUAIAUAAQAaAAAWgNQAWgNAMgXIAAAdQAAAIAIAGQAFADAGABIhNAug");
        this.shape_9.setTransform(0.1, 9.1, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMAEQARgHAAgLIAAgjIB0AAIABAjQAAAIAIAFQAFADAGACIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -21, 37.6, 42);
    (lib.anim4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AiyDJQgJgJAAgMIAAgQQAAgWANgUQAOgWAYgHIABAAIA2gOQAIgDACgDIAAggQgdgjAAgtIAAgNIgIgiQgGgdAAgRQAAgaAOgSQAPgQAWgCQAVgPAcAAQAQABAhAHQAjAJAPgCIABgBIACAAIAAABIACAAIABAAIABAAIAAABIABAAIAAAAIABAAIABABIAAAAIABABIAAAAIABABIAAABIABABIAAAAIABABIAAABQAIARACAdQAEAqgMAnIAAAWQAAAtgdAiIAAABIAAAeQABADAJACIA2AOIAAABQAYAGAPAWQANATAAAXIAAAQQAAANgJAIQgKAJgNAAIk3ABQgNAAgKgJgAiAB3QgPAFgJANQgIANAAAOIAAAQQAAADAFAAICOgBIAAgkIhCgogAAOCSIAAAkICNAAQAGAAAAgDIAAgQQAAgOgIgMQgJgOgPgEIgxgNgAgsBJQAAAKgHAIIAzAfIA0gfQgHgIAAgKIAAgHQgVAMgYAAQgXAAgVgNgAhJgsIAAAFQAAAjAXAcQAWAbAcAAQAeAAAWgaQAVgaAAgkIAAghQg8gXhLgBQgLAhAAARgAhGh6QBTAABEAaQAFgmgJghIAAAAQgSAAgegHQgdgHgNAAQgWgBgOAMIgBABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIgBABIgDAAQgNAAgIAJQgIAKAAAQQAAAIACAOIABgDIAAgBIABAAIAAgBIAAgBIABAAIAAgBIABgBIABAAIAAgBIABAAIABgBIAAAAIACgBIABAAIAAAAIABAAIABgBg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QgdgMgmgIQgrgKgvAAQgGgNAEgTQADgOAHgIIAGgGQgGgJADgDIABAAQARgNAXgBQAQgBAaAGIAgAIQASADANgCQAGAOACAYQAEAhgIAhg");
        this.shape_1.setTransform(1.1, -13.7, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgOALgJIAggbQAMAQAAATIAAAQQAAAGgEAEQgEAFgHABg");
        this.shape_2.setTransform(14.6, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgOAkIgHgBQgKgFAAgKIAAgPQAAgWAPgSIAlAfQALAJAAAOIAAARg");
        this.shape_3.setTransform(-14.3, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAvQgFgEgBgHIAAgQQABgSAKgQQAMgRAUgFIA4gQIBLAvIBOguIA2AOQAUAGAMAQQAKAQABATIAAAQQgBAGgFAFQgGAFgHAAIk3ABQgHgBgGgFg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgXgeAAgmQAAgQAIgcIAHgYQA4gBA6AQQg5gIgeAHIgGAHQgFAQABAsQAAAcAQAbQANAWAQANQgggFgWgeg");
        this.shape_5.setTransform(-2.3, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag9A3QgZggAAgoQAAgQAHgcIAIgZQAxAAAxAMQAhAHAbALIAAApQAAAogZAfQgaAfgkAAQgjAAgaggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhUBBQgOg1AAgZQAAgVALgOQAMgOAUAAQAZgUAuAJQA+ANALgCQAGAOADAYQADAhgHAhIgFgCQgagLghgHQgygMgxAAIgHAZQgHAagBAQg");
        this.shape_7.setTransform(-0.3, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ATQAFgGAAgFIAAgjIB0AAIAAAGQgMAVgVAOQgXAOgZAAQgVAAgTgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAGgBAGgFQATAIAVAAQAZAAAXgNQAVgNAMgXIAAAdQAAANAUAFIhNAug");
        this.shape_9.setTransform(0.1, 9, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMADQARgEAAgMIAAgkIB0AAIAAAjQAAANAUAFIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -20.9, 37.6, 42);
    (lib.anim3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AiyDJQgJgJAAgMIAAgQQAAgWANgUQAOgWAYgHIABAAIA2gOQAIgDACgDIAAggQgdgjAAgtIAAgNIgIgiQgGgdAAgRQAAgaAOgSQAPgQAWgCQAVgPAcAAQAQABAhAHQAjAJAPgCIABgBIACAAIAAABIACAAIABAAIABAAIAAABIABAAIAAAAIABAAIABABIAAAAIABABIAAAAIABABIAAABIABABIAAAAIABABIAAABQAIARACAdQAEAqgMAnIAAAWQAAAtgdAiIAAABIAAAeQABADAJACIA2AOIAAABQAYAGAPAWQANATAAAXIAAAQQAAANgJAIQgKAJgNAAIk3ABQgNAAgKgJgAiAB3QgPAFgJANQgIANAAAOIAAAQQAAADAFAAICOgBIAAgkIhCgogAAOCSIAAAkICNAAQAGAAAAgDIAAgQQAAgOgIgMQgJgOgPgEIgxgNgAgsBJQAAAKgHAIIAzAfIA0gfQgHgIAAgKIAAgHQgVAMgYAAQgXAAgVgNgAhJgsIAAAFQAAAjAXAcQAWAbAcAAQAeAAAWgaQAVgaAAgkIAAghQg8gXhLgBQgLAhAAARgAhGh6QBTAABEAaQAFgmgJghIAAAAQgSAAgegHQgdgHgNAAQgWgBgOAMIgBABIgBAAIgBAAIAAABIgBAAIAAAAIgBAAIgBABIgDAAQgNAAgIAJQgIAKAAAQQAAAIACAOIABgDIAAgBIABAAIAAgBIAAgBIABAAIAAgBIABgBIABAAIAAgBIABAAIABgBIAAAAIACgBIABAAIAAAAIABAAIABgBg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QgdgMgmgIQgrgKgvAAQgGgNAEgTQADgOAHgIIAGgGQgGgJADgDIABAAQARgNAXgBQAQgBAaAGIAgAIQASADANgCQAGAOACAYQAEAhgIAhg");
        this.shape_1.setTransform(1.1, -13.7, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgOALgJIAggbQAMAQAAATIAAAQQAAAGgEAEQgEAFgHABg");
        this.shape_2.setTransform(14.6, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgOAkIgHgBQgKgFAAgKIAAgPQAAgWAPgSIAlAfQALAJAAAOIAAARg");
        this.shape_3.setTransform(-14.3, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAvQgFgEgBgHIAAgQQABgSAKgQQAMgRAUgFIA4gQIBLAvIBOguIA2AOQAUAGAMAQQAKAQABATIAAAQQgBAGgFAFQgGAFgHAAIk3ABQgHgBgGgFg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgXgeAAgmQAAgQAIgcIAHgYQA4gBA6AQQg5gIgeAHIgGAHQgFAQABAsQAAAcAQAbQANAWAQANQgggFgWgeg");
        this.shape_5.setTransform(-2.3, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag9A3QgZggAAgoQAAgQAHgcIAIgZQAxAAAxAMQAhAHAbALIAAApQAAAogZAfQgaAfgkAAQgjAAgaggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhUBBQgOg1AAgZQAAgVALgOQAMgOAUAAQAZgUAuAJQA+ANALgCQAGAOADAYQADAhgHAhIgFgCQgagLghgHQgygMgxAAIgHAZQgHAagBAQg");
        this.shape_7.setTransform(-0.3, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ATQAFgGAAgFIAAgjIB0AAIAAAGQgMAVgVAOQgXAOgZAAQgVAAgTgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAGgBAGgFQATAIAVAAQAZAAAXgNQAVgNAMgXIAAAdQAAANAUAFIhNAug");
        this.shape_9.setTransform(0.1, 9, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMADQARgEAAgMIAAgkIB0AAIAAAjQAAANAUAFIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -20.9, 37.6, 42);
    (lib.anim2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AixDJQgKgJAAgMIAAgQQAAgWANgUQAPgWAYgHIA2gOQAIgDACgDIAAggQgdgjAAgtIAAgNQgOg3AAgZQAAgaAPgSQAOgQAWgCQAVgPAdAAQAQABAgAHQAjAJAPgCIABAAIABgBIABAAIAAABIADAAIAAAAIABAAIABABIABAAIAEAEIAAAAIABABIAAABIAAAAIAAABQAIARADAdQADApgMAoIAAAWQAAAtgdAiIAAAfQABADAJACIA2AOIAAABQAYAHAPAVQANAUAAAWIAAAQQAAANgJAIQgKAJgNAAIk2ABQgOAAgJgJgAiAB3QgPAFgJANQgIANAAAOIAAAQQAAADAGAAICOgBIgBgkIhBgogAAOCSIAAAkICOAAIAEgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgQQAAgOgIgMQgJgOgPgEIgxgNgAgsBJQAAAKgHAIIAzAfIA0gfQgHgIAAgKIAAgHQgUAMgZAAIAAAAQgXAAgVgNgAhIgsIAAAFQAAAkAWAbQAWAbAcAAIAAAAQAeAAAWgaQAWgaAAgkIAAghQg+gXhKgBQgKAfAAATgAhGh6QBSAABFAaQAFgmgJghIAAAAQgTAAgdgHQgdgHgMAAQgXgBgOAMIAAAAIgBABIgBAAIgBABIgBAAIAAAAIgBAAIgBABIgDAAQgMAAgJAJQgJAKABAQQAAALACALIABgDIAAAAIABgBIAAAAIABgBIAAgBIAAgBIABAAIAAgBIABAAIACgCIAAAAIABAAIABAAIAAgBIABAAIABAAIABAAIABgBg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QgcgMgngIQgugKgsAAQgGgPAEgRQADgOAHgIIAGgGQgFgIADgEIAAAAQARgNAXgBQAQgBAaAHIAgAHQASADANgCQAGAOADAYQADAhgIAhg");
        this.shape_1.setTransform(1.1, -13.7, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgOALgJIAggbQAMARAAASIAAAQQAAAGgEAEQgFAFgHABg");
        this.shape_2.setTransform(14.7, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAkIgGgBQgKgFAAgKIAAgPQAAgXAPgRIAkAfQAMAIAAAPIAAARg");
        this.shape_3.setTransform(-14.2, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAwQgGgFABgHIAAgPQgBgUALgPQAMgRATgFIA5gPIBLAuIBOguIA3AOQASAFAMARQAMAPAAAUIAAAQQAAAGgGAFQgFAFgJAAIk1ABQgJgBgFgEg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgWgegBgmQAAgQAIgcIAHgYQA3gBA7AQQg5gIgeAHIgGAHQgFAQABAsQAAAcAQAbQAMAWAQANQgfgFgWgeg");
        this.shape_5.setTransform(-2.2, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag9A3QgZgfAAgpQAAgQAHgcIAIgZQBSAABMAeIAAApQAAAogZAfQgaAfgkAAQgjAAgaggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhUBBQgOg1AAgZQAAgVALgOQAMgOAUAAQAZgUAuAJQA+ANALgCQAHAOACAYQAEAhgIAhIgEgCQhNgehSAAIgHAZQgHAagBAQg");
        this.shape_7.setTransform(-0.2, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ATQAFgGAAgFIAAgjIB0AAIAAAGQgLAVgWAOQgXAOgZAAQgWAAgSgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAHgBAFgFQASAIAWAAQAZAAAXgNQAWgNALgXIABAdQAAANATAFIhNAug");
        this.shape_9.setTransform(0.1, 9, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMAEQARgGAAgLIAAgkIB0AAIABAjQAAANATAFIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -20.9, 37.7, 42);
    (lib.anim1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AixDJQgKgJAAgMIAAgQQAAgWANgUQAPgWAYgHIA2gOQAIgDACgDIAAggQgdgjAAgtIAAgNQgOg3AAgZQAAgaAPgSQAOgQAWgCQAVgPAdAAQAQABAgAHQAjAJAPgCIABAAIABgBIABAAIAAABIADAAIAAAAIABAAIABABIABAAIAEAEIAAAAIABABIAAABIAAAAIAAABQAIARADAdQADApgMAoIAAAWQAAAtgdAiIAAAfQABADAJACIA2AOIAAABQAYAHAPAVQANAUAAAWIAAAQQAAANgJAIQgKAJgNAAIk2ABQgOAAgJgJgAiAB3QgPAFgJANQgIANAAAOIAAAQQAAADAGAAICOgBIgBgkIhBgogAAOCSIAAAkICOAAIAEgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgQQAAgOgIgMQgJgOgPgEIgxgNgAgsBJQAAAKgHAIIAzAfIA0gfQgHgIAAgKIAAgHQgUAMgZAAIAAAAQgXAAgVgNgAhIgsIAAAFQAAAkAWAbQAWAbAcAAIAAAAQAeAAAWgaQAWgaAAgkIAAghQg+gXhKgBQgKAfAAATgAhGh6QBSAABFAaQAFgmgJghIAAAAQgTAAgdgHQgdgHgMAAQgXgBgOAMIAAAAIgBABIgBAAIgBABIgBAAIAAAAIgBAAIgBABIgDAAQgMAAgJAJQgJAKABAQQAAALACALIABgDIAAAAIABgBIAAAAIABgBIAAgBIAAgBIABAAIAAgBIABAAIACgCIAAAAIABAAIABAAIAAgBIABAAIABAAIABAAIABgBg");
        this.shape.setTransform(0, 0, 0.999, 0.999);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("ABMA6QgcgMgngIQgugKgsAAQgGgPAEgRQADgOAHgIIAGgGQgFgIADgEIAAAAQARgNAXgBQAQgBAaAHIAgAHQASADANgCQAGAOADAYQADAhgIAhg");
        this.shape_1.setTransform(1.1, -13.7, 0.999, 0.999);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgbAiIAAgRQAAgOALgJIAggbQAMARAAASIAAAQQAAAGgEAEQgFAFgHABg");
        this.shape_2.setTransform(14.7, 16.1, 0.999, 0.999);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgPAkIgGgBQgKgFAAgKIAAgPQAAgXAPgRIAkAfQAMAIAAAPIAAARg");
        this.shape_3.setTransform(-14.2, 15.9, 0.999, 0.999);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AioAwQgGgFABgHIAAgPQgBgUALgPQAMgRATgFIA5gPIBLAuIBOguIA3AOQASAFAMARQAMAPAAAUIAAAQQAAAGgGAFQgFAFgJAAIk1ABQgJgBgFgEg");
        this.shape_4.setTransform(0, 14.4, 0.999, 0.999);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgpAzQgWgegBgmQAAgQAIgcIAHgYQA3gBA7AQQg5gIgeAHIgGAHQgFAQABAsQAAAcAQAbQAMAWAQANQgfgFgWgeg");
        this.shape_5.setTransform(-2.2, -2.3, 0.999, 0.999);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("Ag9A3QgZgfAAgpQAAgQAHgcIAIgZQBSAABMAeIAAApQAAAogZAfQgaAfgkAAQgjAAgaggg");
        this.shape_6.setTransform(0, -2.2, 0.999, 0.999);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AhUBBQgOg1AAgZQAAgVALgOQAMgOAUAAQAZgUAuAJQA+ANALgCQAHAOACAYQAEAhgIAhIgEgCQhNgehSAAIgHAZQgHAagBAQg");
        this.shape_7.setTransform(-0.2, -11.9, 0.999, 0.999);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("Ag8ATQAFgGAAgFIAAgjIB0AAIAAAGQgLAVgWAOQgXAOgZAAQgWAAgSgJg");
        this.shape_8.setTransform(-0.3, 6.6, 0.999, 0.999);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AhMABQAHgBAFgFQASAIAWAAQAZAAAXgNQAWgNALgXIABAdQAAANATAFIhNAug");
        this.shape_9.setTransform(0.1, 9, 0.999, 0.999);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#F8B176").s().p("AhMAEQARgGAAgLIAAgkIB0AAIABAjQAAANATAFIhNAug");
        this.shape_10.setTransform(0.1, 8.8, 0.999, 0.999);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18.8, -20.9, 37.7, 42);
    (lib.qtyofpartners = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_14 = new cjs.Graphics().p("ABQCtIBxiYIA1AoIhwCXgAj1A2IA0gqIB1CUIg1AqgAhhjNIC7gHIACBEIi7AFg");
        var mask_graphics_15 = new cjs.Graphics().p("ABPCsIByiYIA1ApIhxCXgAj1A1IA0gqIB2CUIgCABIgyApgAhhjNIC8gGIACBEIgNgBIivAGg");
        var mask_graphics_16 = new cjs.Graphics().p("ABLCqIB0iYIA2ArIhzCXgAj0A1IA1gqIBBBKIA3BJIgCABIgyApgAhjjJIAUgCIALABICJgJIAWABIADBFIgMAAIixAHg");
        var mask_graphics_17 = new cjs.Graphics().p("AB1DOIgwgmIANgRIAHgHIAQgUIAhg0IA1g5IA1AuIgGAJIgJARIglAxIgNAOIgEAFIgVAUIgcAkgAiOCqIgFgHIgVgZIgmgkIglgwIAQgNIAIgGIAfgZIBDBFIAiAzIAWAaIgKAGIgMANIgcAZgAhmjDIAWgCIALABIBPgNIA8gBIAWACIAAAoIAFAgIgLgBIhKAJIgTAAIgIgBIgggCIgvAFg");
        var mask_graphics_18 = new cjs.Graphics().p("ABuDOIgygpIAPgSIAHgFIASgWIAgg4IA4g1IAbAdIAcAVIgFAIIgHASIgnA0IgPAMIgDAEIgXASIgfAmgAh3C7IgPgRIgDgHIgXgaIgqgfIgog0IARgOIAJgEIAWgRIAKgLIBIA+IAgA4IAYAbIgIAFIgKAOIgeAbgAgEh2IgGgBIghgEIgxAHIgDgIIgKg+IAWgEIAMACIAagFIA0gPIBBgCIAVAFIABAqIAGAiIgJgCIhJAPg");
        var mask_graphics_19 = new cjs.Graphics().p("ABlDPIg1guIARgTIAIgEIATgWIAgg/IAygpIAMgHIAZAhIAfAXIgEAHIgFATIgqA4IgQAKIgDACIgZAPIgjAogAhrC9IgQgSIgDgIIgZgcIgvgZIgrg3IATgQIAKgCIAXgTIAKgLIAaANIAzAnIAfA+IAaAcIgBACIgGACIgHAQIgfAdgAABhpIgEgCIgkgGIg0ALIgDgHIgPhCIAXgFIAMACIAcgGIAygXIBGgCIAUAHIABAvIAKAiIgIgDIgLAGIg+ARg");
        var mask_graphics_20 = new cjs.Graphics().p("ABbDPIg4gzIASgUIAJgDIAWgXIAehGIA6gnIAKgCIAYAlIAiAZIgDAFIgBAUIguA+IgSAHIgCABIgcAKIgnArgAhbC/IgTgTIgBgIIgdgeIg0gSIgvg8IAVgRIAKgBIAagUIAJgOIAZAFIA7AkIAdBFIAdAeIgBACIgEABIgEAQIghAhgAAHhYIgEgEIglgJIg3APIgFgFIgUhHIAYgHIANAEIAegIIAwghIBNgCIASALIAAAyIAPAkIgHgEIgHAHIhAAZg");
        var mask_graphics_21 = new cjs.Graphics().p("ABNDQIg8g6IAUgWIAKAAIAZgZIAdhPIBDgjIAKACIAVArIAlAbIAAADIADAVIgzBEIg1AJIgsAugAhKDCIgVgVIAAgJIggggIg7gJIgzhCIAWgTIALABIAdgWIAJgQIAXgFIBEAgIAaBPIAhAgIgBACIgCgCIAAASIgjAmgAAOhFIgDgFIgngNIg9AVIgGgEIgahMIAagJIANAGIAhgMIAugsIBTgCIASAPIgBA4IATAlIgEgGIgDAKIhDAig");
        var mask_graphics_22 = new cjs.Graphics().p("AADCWIglAqIgWAEIgXgWIABgLIglgjIhBACIg6hJIAZgUIAMADIAggZIAIgRIAWgSIBPAdIAWBYIAmAiIAAgCIABAHIARgRIALACIAcgcIAbhYIBOghIAIAIIATAyIApAfIADAAIAGAXIg4BLIgXAAIABgDIgkAAIgyAyIgQACgAAUgwIgBgGIgrgRIhBAaIgIgBIgjhSIAcgNIAPAJIAjgPIArg5IBcgDIAPAVIgBA9IAZAnIgBgIIABAIIAAAAIABAFIhIArg");
        var mask_graphics_23 = new cjs.Graphics().p("AAECqIgQASIgYAKIgbgYIADgMIgpglIhKAOIhAhSIAdgWIANAGIAigcIAIgTIAVghIAbAIIglhNIAfgQIAPALIAmgTIAohIIBmgDIAOAaIgCBEIAfArIACgKIAHAPIhFAxIBZgfIAHAQIARA5IAtAiIAFgDIAMAZIg+BTIgbgEIADgEIgpgHIg4A2IgRAEg");
        var mask_graphics_24 = new cjs.Graphics().p("AACC/IgPAKIgfgaIAFgOIgvgoIhTAbIhHhaIAggZIAOAJIAngfIAUg4IgXgpIAigTIARANIApgXIAkhYIBxgEIALAhIgCBLIAgAlIALgCIAAgCIABABIAJgCIAUBZIAzAlIAIgGIARAbIhFBcIgegJIAFgGIgvgPIhAA7IgTAGg");
        var mask_graphics_25 = new cjs.Graphics().p("AhRB6IhRAkIhPhkIAjgcIAQAMIArghIAEgVIgdgxIAlgXIAJAIIACgHIAYADIAbgQIAfhqIB+gFIAJAoIgDBUIACABIAsgJIAGAtIADgEIAUAVIgSASIAEAcIA4ApIALgJIAYAdIhMBmIgjgOIAHgKIg0gVIgfAaIgPATIgeAYIgDgDIgOAHg");
        var mask_graphics_26 = new cjs.Graphics().p("AheCIIg9AgIhXhuIAngfIARAQIAhgZIgjg0IAogbIASASIAMhCIAsAEIAUhgICMgFIAGAwIgCAvIAkgFIAGBbIALAKIANgSIAbAaIgfAfIAuAhIAPgNIAeAfIhUBxIgngUIAJgMIgfgQIgcAkIggAfIghgaIgQANIgXAOg");
        var mask_graphics_27 = new cjs.Graphics().p("AAYCvIAMgSIgRgOIg4AuIgaARIgrg1IgpAaIhgh6IArgiIATATIAHgFIgggsIAsgfIAUAVIARgMIANhtIAjABIAKhBICagGIADA4IAAAKIAZgDIADB7IAgAaIARgUIAkAdIgcAgIANAJIATgRIAlAiIhdB9IgrgaIALgQIgDgCIgxA5g");
        var mask_graphics_28 = new cjs.Graphics().p("AAzCtIAPgUIgxglIhvBYIgYgdIgUAPIhqiHIAbgWIgIgMIAwgjIAVAYIAngcIAMiYIAUAAIADghICrgGIAAAhIAPgBIgDCeIA5AtIAVgZIAsAjIgFAIIAbAWIhnCKIgYgRIgTAXg");
        var mask_graphics_29 = new cjs.Graphics().p("ABQCsIARgXIhRg8IiRBwIh0iUIA0gpIAWAcIBAgwIAKjEIC8gHIgKDGIBZBBIAXgfIA1AoIhwCXg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(14).to({ graphics: mask_graphics_14, x: 45, y: 60.9 }).wait(1).to({ graphics: mask_graphics_15, x: 45, y: 60.9 }).wait(1).to({ graphics: mask_graphics_16, x: 45, y: 60.9 }).wait(1).to({ graphics: mask_graphics_17, x: 44.9, y: 60.8 }).wait(1).to({ graphics: mask_graphics_18, x: 44.7, y: 60.8 }).wait(1).to({ graphics: mask_graphics_19, x: 44.6, y: 60.7 }).wait(1).to({ graphics: mask_graphics_20, x: 44.4, y: 60.6 }).wait(1).to({ graphics: mask_graphics_21, x: 44.3, y: 60.5 }).wait(1).to({ graphics: mask_graphics_22, x: 44.3, y: 60.5 }).wait(1).to({ graphics: mask_graphics_23, x: 44.4, y: 60.5 }).wait(1).to({ graphics: mask_graphics_24, x: 44.5, y: 60.5 }).wait(1).to({ graphics: mask_graphics_25, x: 44.6, y: 60.4 }).wait(1).to({ graphics: mask_graphics_26, x: 44.7, y: 60.4 }).wait(1).to({ graphics: mask_graphics_27, x: 44.8, y: 60.5 }).wait(1).to({ graphics: mask_graphics_28, x: 44.9, y: 60.7 }).wait(1).to({ graphics: mask_graphics_29, x: 45, y: 60.9 }).wait(52));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("Ah/ByQgDgEABgGQABgGAFgDIBuhJIAAh/QAAgGAEgEQAEgFAFAAQAFAAAEAFQAEAEAAAGIAAB/IBvBJQAEADABAFQACAGgEAFQgDAGgIAAQgEAAgDgCIhthIIhsBIQgEACgDABQgHAAgFgHg");
        this.shape.setTransform(45, 58.8, 0.999, 0.999);
        this.shape._off = true;
        var maskedShapeInstanceList = [this.shape];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({ _off: false }, 0).wait(67));
        this.instance = new lib.anim1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(45, 45);
        this.instance_1 = new lib.anim2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(71.1, 68.9);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance }] }).to({ state: [{ t: this.instance_1 }] }, 14).to({ state: [] }, 66).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ _off: true, x: 71.1, y: 68.9 }, 14, cjs.Ease.get(-1)).wait(67));
        this.instance_2 = new lib.anim3("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(45, 45);
        this.instance_3 = new lib.anim4("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(18.9, 69);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_2 }] }).to({ state: [{ t: this.instance_3 }] }, 14).to({ state: [] }, 66).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ _off: true, x: 18.9, y: 69 }, 14, cjs.Ease.get(-1)).wait(67));
        this.instance_4 = new lib.anim5("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(45, 45);
        this.instance_5 = new lib.anim6("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(44.9, 21);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.instance_4 }] }).to({ state: [{ t: this.instance_5 }] }, 14).to({ state: [] }, 66).wait(1));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ _off: true, x: 44.9, y: 21 }, 14, cjs.Ease.get(-1)).wait(67));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(71.2, 69, 37.7, 42);
    lib.properties = {
        width: 90,
        height: 90,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init3() {
    canvas = document.getElementById("canvas3");
    anim_container = document.getElementById("animation_container3");
    dom_overlay_container = document.getElementById("dom_overlay_container3");
    handleComplete3();
})();
function handleComplete3() {
    exportRoot = new lib.qtyofpartners();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}
(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        }
        else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }
    (lib.incide = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAdAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIgpAAIgLgtIBWAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhiAAIgOg5IIBAAIhdEjg");
        this.shape.setTransform(25.7, 14.6);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAdAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIgpAAIgLgtIBWAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhiAAIgOg5IIBAAIhdEjg");
        this.shape_1.setTransform(25.7, 14.6);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAeAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIgqAAIgLgtIBVAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhhAAIgOg5IIBAAIhdEjg");
        this.shape_2.setTransform(25.7, 14.6);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAgAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIgsAAIgLgtIBTAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhfAAIgOg5IIBAAIhdEjg");
        this.shape_3.setTransform(25.7, 14.6);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAiAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIguAAIgLgtIBQAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhcAAIgOg5IIBAAIhdEjg");
        this.shape_4.setTransform(25.7, 14.6);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAmAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIgyAAIgLgtIBNAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhZAAIgOg5IIBAAIhdEjg");
        this.shape_5.setTransform(25.7, 14.6);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIApAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIg1AAIgLgtIBJAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhVAAIgOg5IIBAAIhdEjg");
        this.shape_6.setTransform(25.7, 14.6);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAuAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgHgHgJAAIg6AAIgLgtIBEAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhQAAIgOg5IIBAAIhdEjg");
        this.shape_7.setTransform(25.7, 14.6);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAzAAQAKAAAHgGQAGgHAAgJQAAgKgHgGQgGgHgKAAIg/AAIgLgtIA+AAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhKAAIgOg5IIBAAIhdEjg");
        this.shape_8.setTransform(25.7, 14.6);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIA5AAQAKAAAHgGQAGgHAAgJQAAgKgHgGQgGgHgKAAIhFAAIgLgtIA4AAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhEAAIgOg5IIBAAIhdEjg");
        this.shape_9.setTransform(25.7, 14.6);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIA0AAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgHgHgJAAIhAAAIgLgtIA+AAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhKAAIgOg5IIBAAIhdEjg");
        this.shape_10.setTransform(25.7, 14.6);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAvAAQAJAAAHgGQAHgHAAgJQAAgKgHgGQgHgHgJAAIg7AAIgLgtIBDAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhPAAIgOg5IIBAAIhdEjg");
        this.shape_11.setTransform(25.7, 14.6);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIArAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIg3AAIgLgtIBHAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhTAAIgOg5IIBAAIhdEjg");
        this.shape_12.setTransform(25.7, 14.6);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAnAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIgzAAIgLgtIBLAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhXAAIgOg5IIBAAIhdEjg");
        this.shape_13.setTransform(25.7, 14.6);
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAkAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIgwAAIgLgtIBPAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhbAAIgOg5IIBAAIhdEjg");
        this.shape_14.setTransform(25.7, 14.6);
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAhAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIgtAAIgLgtIBRAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhdAAIgOg5IIBAAIhdEjg");
        this.shape_15.setTransform(25.7, 14.6);
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAfAAQAKAAAHgHQAGgGAAgKQAAgJgHgHQgGgGgKAAIgrAAIgLgtIBUAAQAJAAAHgHQAGgGAAgKQAAgJgGgHQgHgGgJAAIhgAAIgOg5IIBAAIhdEjg");
        this.shape_16.setTransform(25.7, 14.6);
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#7DB1CA").s().p("Ai3CSIgYhjIAeAAQAJAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgJAAIgqAAIgLgtIBVAAQAKAAAGgHQAHgGAAgKQAAgJgHgHQgGgGgKAAIhhAAIgOg5IIBAAIhdEjg");
        this.shape_17.setTransform(25.7, 14.6);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape }] }).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 1).to({ state: [{ t: this.shape_12 }] }, 1).to({ state: [{ t: this.shape_13 }] }, 1).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_17 }] }, 1).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape }] }, 1).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 51.4, 29.2);
    (lib.f2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AiHAwIAAhfIEPAAIAABfg");
        this.shape.setTransform(13.6, 4.8);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = getMCSymbolPrototype(lib.f2, new cjs.Rectangle(0, 0, 27.2, 9.6), null);
    (lib.Анимация5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AiYBeIBgi8IDRBqIgpBSg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.3, -9.4, 30.7, 18.9);
    (lib.Анимация3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#3787AA").s().p("Ag3A4QgXgYAAggQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAggXAYQgXAXghAAQggAAgXgXg");
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.8, -7.9, 15.8, 15.8);
    (lib.Анимация1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
        this.shape.setTransform(0.1, 0);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#3787AA").s().p("Ag3A4QgXgYAAggQAAggAXgXQAYgXAfAAQAhAAAXAXQAXAXAAAgQAAAggXAYQgXAXghAAQgfAAgYgXg");
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_1 }, { t: this.shape }] }).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.8, -7.9, 15.8, 15.8);
    (lib.wheel2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.Анимация3("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(8, 0.1, 1, 0.963, 0, 0, 0, 0.1, -7.7);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regX: 0, regY: -7.9, scaleY: 1, x: 7.9, y: 0 }, 9).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -0.1, 15.8, 15.2);
    (lib.wheel1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.Анимация1("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-12.9, 6.6, 1, 1, 0, 0, 0, 0, -7.9);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ regY: -7.8, scaleY: 0.96, y: 6.7 }, 9).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.8, 6.6, 15.8, 15.8);
    (lib.f1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.Анимация5("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(15.3, 24, 1, 1, 0, 0, 0, 0, 9.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    }).prototype = getMCSymbolPrototype(lib.f1, new cjs.Rectangle(0, 5, 30.7, 18.9), null);
    (lib.qtyofproducts = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AiwFcQgngHgPgkQgOgjAUgeIAuhIIh2nYIh3AAQgJAAgHgGQgGgHAAgJQAAgJAHgHQAGgHAJAAICJAAQAIAAAGAFQAGAFACAHIANA4IJmAAQAhAAAUAcQAVAbgLAfIhrFSQgHAVgRANQgRAMgWAAImVAAIgtBGQgIAOAHANQAIAOAQAAIH9AAQAJAAAHAGQAGAHAAAJQAAAKgGAGQgHAHgJAAgAiICVIGQAAQAPAAAFgOIBrlSQADgMgHgIQgGgIgKAAIpaAAg");
        this.shape.setTransform(45, 43.7);
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));
        this.instance = new lib.wheel1();
        this.instance.parent = this;
        this.instance.setTransform(36, 82.1, 1, 1, 0, 0, 0, -13, 14.5);
        this.timeline.addTween(cjs.Tween.get(this.instance).to({ rotation: 360 }, 10).to({ rotation: 720 }, 10).to({ rotation: 1080 }, 10).to({ rotation: 1440 }, 9).to({ rotation: 1800 }, 10).to({ rotation: 2160 }, 10).to({ rotation: 2520 }, 10).to({ rotation: 3060, x: 36.1 }, 5).to({ rotation: 2880, x: 36 }, 5).wait(1));
        this.instance_1 = new lib.wheel2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(63.6, 82.1, 1, 1, 0, 0, 0, 7.9, 7.9);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({ rotation: 360 }, 10).to({ rotation: 720 }, 10).to({ rotation: 1080 }, 10).to({ rotation: 1440 }, 9).to({ rotation: 1800 }, 10).to({ rotation: 2160 }, 10).to({ rotation: 2520 }, 10).to({ rotation: 3060, x: 63.5 }, 5).to({ rotation: 2880, x: 63.6 }, 5).wait(1));
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#3787AA").s().p("AgDB7QgGgGAAgJIAAgJIgqAAQgIAAgGgHQgGgFAAgIQAAgIAGgHQAGgFAIgBIBAAAQAIABAGgGQAFgGAAgIQAAgIgFgFQgGgGgIAAIgYAAQgZAAgRgSQgSgQAAgYQAAgZASgRQARgSAZAAIACAAIAAgJQAAgIAGgHQAFgFAIAAQAIAAAGAFQAGAHAAAIIAAAJIAWAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIg/AAQgJAAgGAGQgFAFAAAJQAAAHAFAGQAGAGAJAAIAYAAQAZAAAQASQASAPAAAZQAAAUgMAQQgMAQgSAFIAAAMQAAAJgGAGQgGAFgIAAQgIAAgFgFg");
        this.shape_1.setTransform(52.6, 39.6);
        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(80));
        this.instance_2 = new lib.incide();
        this.instance_2.parent = this;
        this.instance_2.setTransform(53.3, 39.7, 1, 1, 0, 0, 0, 25.7, 14.6);
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFFFFF").s().p("AjmDRIhjmhIKTAMIh9GVg");
        this.shape_2.setTransform(53.5, 39.5);
        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(80));
        this.instance_3 = new lib.f2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(70.4, 24.8, 0.125, 0.125, 0, 0, 0, 13.6, 4.8);
        this.instance_3._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({ _off: false }, 0).to({ scaleX: 1, scaleY: 1, y: 13.7 }, 14, cjs.Ease.get(1)).wait(15).to({ scaleX: 0.13, scaleY: 0.13, y: 24.8 }, 15, cjs.Ease.get(-1)).wait(22));
        this.instance_4 = new lib.f1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(63.5, 26.1, 0.106, 0.106, 0, 0, 0, 15.1, 14.7);
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({ regX: 15.3, regY: 14.5, scaleX: 1, scaleY: 1, y: 9.5 }, 14, cjs.Ease.get(1)).wait(14).to({ regX: 15.1, regY: 14.7, scaleX: 0.11, scaleY: 0.11, y: 26.1 }, 15, cjs.Ease.get(-1)).wait(37));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(46.2, 53.8, 87.6, 81.3);
    lib.properties = {
        width: 90,
        height: 90,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
(function init4() {
    canvas = document.getElementById("canvas4");
    anim_container = document.getElementById("animation_container4");
    dom_overlay_container = document.getElementById("dom_overlay_container4");
    handleComplete4();
})();
function handleComplete4() {
    exportRoot = new lib.qtyofproducts();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}
(function (lib, img, cjs, ss, an) {
    var p;
    lib.webFontTxtInst = {};
    var loadedTypekitCount = 0;
    var loadedGoogleCount = 0;
    var gFontsUpdateCacheList = [];
    var tFontsUpdateCacheList = [];
    lib.ssMetadata = [];
    lib.updateListCache = function (cacheList) {
        for (var i = 0; i < cacheList.length; i++) {
            if (cacheList[i].cacheCanvas)
                cacheList[i].updateCache();
        }
    };
    lib.addElementsToCache = function (textInst, cacheList) {
        var cur = textInst;
        while (cur != null && cur != exportRoot) {
            if (cacheList.indexOf(cur) != -1)
                break;
            cur = cur.parent;
        }
        if (cur != exportRoot) {
            var cur2 = textInst;
            var index = cacheList.indexOf(cur);
            while (cur2 != null && cur2 != cur) {
                cacheList.splice(index, 0, cur2);
                cur2 = cur2.parent;
                index++;
            }
        }
        else {
            cur = textInst;
            while (cur != null && cur != exportRoot) {
                cacheList.push(cur);
                cur = cur.parent;
            }
        }
    };
    lib.gfontAvailable = function (family, totalGoogleCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);
        loadedGoogleCount++;
        if (loadedGoogleCount == totalGoogleCount) {
            lib.updateListCache(gFontsUpdateCacheList);
        }
    };
    lib.tfontAvailable = function (family, totalTypekitCount) {
        lib.properties.webfonts[family] = true;
        var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
        for (var f = 0; f < txtInst.length; ++f)
            lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);
        loadedTypekitCount++;
        if (loadedTypekitCount == totalTypekitCount) {
            lib.updateListCache(tFontsUpdateCacheList);
        }
    };
    (lib.Анимация18 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация17 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация16 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация15 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация14 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация13 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация12 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация11 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация8 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация7 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.Анимация1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#3787AA").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -3.1, 6.2, 6.2);
    (lib.qtyoftransaction = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});
        this.instance = new lib.Анимация17("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(69.9, 6.3, 0.145, 0.145);
        this.instance._off = true;
        this.instance_1 = new lib.Анимация18("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(69.9, 6.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance }] }, 44).to({ state: [{ t: this.instance_1 }] }, 4).wait(32));
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(32));
        this.instance_2 = new lib.Анимация15("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(60.6, 57.5, 0.145, 0.145);
        this.instance_2._off = true;
        this.instance_3 = new lib.Анимация16("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(60.6, 57.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_2 }] }, 40).to({ state: [{ t: this.instance_3 }] }, 4).wait(36));
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(36));
        this.instance_4 = new lib.Анимация13("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(41.9, 71.4, 0.145, 0.145);
        this.instance_4._off = true;
        this.instance_5 = new lib.Анимация14("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(41.9, 71.4);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_4 }] }, 36).to({ state: [{ t: this.instance_5 }] }, 4).wait(40));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(40));
        this.instance_6 = new lib.Анимация7("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(79.2, 74.5, 0.129, 0.129);
        this.instance_6._off = true;
        this.instance_7 = new lib.Анимация8("synched", 0);
        this.instance_7.parent = this;
        this.instance_7.setTransform(79.2, 74.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_6 }] }, 28).to({ state: [{ t: this.instance_7 }] }, 4).wait(48));
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(48));
        this.instance_8 = new lib.Анимация5("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(51.3, 65.2, 0.129, 0.129);
        this.instance_8._off = true;
        this.instance_9 = new lib.Анимация6("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(51.3, 65.2);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_8 }] }, 24).to({ state: [{ t: this.instance_9 }] }, 4).wait(52));
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(52));
        this.instance_10 = new lib.Анимация3("synched", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(32.6, 37.3, 0.161, 0.161);
        this.instance_10._off = true;
        this.instance_11 = new lib.Анимация4("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(32.6, 37.3);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_10 }] }, 20).to({ state: [{ t: this.instance_11 }] }, 4).wait(56));
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(56));
        this.instance_12 = new lib.Анимация1("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(23.3, 49.7, 0.161, 0.161);
        this.instance_12._off = true;
        this.instance_13 = new lib.Анимация2("synched", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(23.3, 49.7);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_12 }] }, 16).to({ state: [{ t: this.instance_13 }] }, 4).wait(60));
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(60));
        this.instance_14 = new lib.Анимация11("synched", 0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(14, 66.8, 0.145, 0.145);
        this.instance_14._off = true;
        this.instance_15 = new lib.Анимация12("synched", 0);
        this.instance_15.parent = this;
        this.instance_15.setTransform(14, 66.8);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_14 }] }, 32).to({ state: [{ t: this.instance_15 }] }, 4).wait(44));
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(32).to({ _off: false }, 0).to({ _off: true, scaleX: 1, scaleY: 1 }, 4).wait(44));
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DB1CA").s().p("AmxAQQgHAAgFgFQgEgFAAgGQAAgGAEgEQAFgEAHgBINkAAQAGABAEAEQAFAEAAAGQAAAHgFAEQgEAFgGAAg");
        this.shape.setTransform(45, 85.4);
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#7DB1CA").s().p("AgKG+QgEgFgBgGIAAtkQABgHAEgFQAEgEAGAAQAGAAAFAEQAFAFAAAHIAANkQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
        this.shape_1.setTransform(4.7, 45);
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7DB1CA").s().p("AgGAPQgHABgFgFQgEgEgBgHQABgFAEgFQAFgEAHAAIAdAAIAAAdg");
        this.shape_2.setTransform(2.4, 10.9);
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#7DB1CA").s().p("AgGAQQgHAAgFgFQgEgFgBgGQABgFAEgFQAFgEAHgBIAdAAIAAAfg");
        this.shape_3.setTransform(2.4, 20.2);
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#7DB1CA").s().p("AgGAPQgHAAgFgEQgEgFgBgGQABgGAEgEQAFgFAHABIAdAAIAAAdg");
        this.shape_4.setTransform(2.4, 29.5);
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#7DB1CA").s().p("AgGAPQgIABgEgFQgEgEgBgHQABgFAEgFQAFgEAHAAIAdAAIAAAdg");
        this.shape_5.setTransform(2.4, 38.8);
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#7DB1CA").s().p("AgGAPQgHABgFgFQgEgFgBgGQABgFAEgFQAEgFAIABIAdAAIAAAdg");
        this.shape_6.setTransform(2.4, 48.2);
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#7DB1CA").s().p("AgGAQQgHAAgFgFQgEgFgBgGQABgGAEgEQAFgEAHgBIAdAAIAAAfg");
        this.shape_7.setTransform(2.4, 57.5);
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#7DB1CA").s().p("AgGAQQgHgBgFgEQgEgEgBgHQABgFAEgFQAFgFAHAAIAdAAIAAAfg");
        this.shape_8.setTransform(2.4, 66.8);
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#7DB1CA").s().p("AgGAPQgHABgFgFQgEgFgBgGQABgFAEgFQAFgFAHABIAdAAIAAAdg");
        this.shape_9.setTransform(2.4, 76.1);
        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#7DB1CA").s().p("AgKATQgFgFAAgGIAAgeIAfAAIAAAeQgBAGgEAFQgEAEgHAAQgFAAgFgEg");
        this.shape_10.setTransform(14, 87.7);
        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#7DB1CA").s().p("AgKATQgFgFABgGIAAgeIAdAAIAAAeQABAGgFAFQgFAEgGAAQgFAAgFgEg");
        this.shape_11.setTransform(23.3, 87.7);
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#7DB1CA").s().p("AgKATQgEgFgBgGIAAgeIAfAAIAAAeQAAAGgFAFQgFAEgGAAQgGAAgEgEg");
        this.shape_12.setTransform(32.6, 87.7);
        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#7DB1CA").s().p("AgKATQgFgFAAgGIAAgeIAfAAIAAAeQgBAHgEAEQgEAEgHAAQgFAAgFgEg");
        this.shape_13.setTransform(41.9, 87.7);
        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#7DB1CA").s().p("AgKATQgFgEAAgHIAAgeIAfAAIAAAeQgBAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_14.setTransform(51.3, 87.7);
        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#7DB1CA").s().p("AgKATQgFgFABgGIAAgeIAdAAIAAAeQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
        this.shape_15.setTransform(60.6, 87.7);
        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#7DB1CA").s().p("AgKATQgEgFgBgGIAAgeIAeAAIAAAeQABAGgFAFQgEAEgHAAQgGAAgEgEg");
        this.shape_16.setTransform(69.9, 87.7);
        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#7DB1CA").s().p("AgKATQgFgFAAgGIAAgeIAfAAIAAAeQgBAGgEAFQgFAEgGAAQgFAAgFgEg");
        this.shape_17.setTransform(79.2, 87.7);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(80));
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_16 = new cjs.Graphics().p("AjQBAIAAh/IGhAAIAAB/g");
        var mask_graphics_17 = new cjs.Graphics().p("Ai3BaIAAizIFvAAIAACzg");
        var mask_graphics_18 = new cjs.Graphics().p("AieB0IAAjnIE9AAIAADng");
        var mask_graphics_19 = new cjs.Graphics().p("AiFCOIAAkbIEMAAIAAEbg");
        var mask_graphics_20 = new cjs.Graphics().p("AhtCpIAAlRIDbAAIAAFRg");
        var mask_graphics_21 = new cjs.Graphics().p("AiOCpIAAlRIEdAAIAAFRg");
        var mask_graphics_22 = new cjs.Graphics().p("AiwCpIAAlRIFhAAIAAFRg");
        var mask_graphics_23 = new cjs.Graphics().p("AjRCpIAAlRIGjAAIAAFRg");
        var mask_graphics_24 = new cjs.Graphics().p("AjyCpIAAlRIHmAAIAAFRg");
        var mask_graphics_25 = new cjs.Graphics().p("AkOC5IAAlxIIeAAIAAFxg");
        var mask_graphics_26 = new cjs.Graphics().p("AkqDKIAAmTIJVAAIAAGTg");
        var mask_graphics_27 = new cjs.Graphics().p("AlHDbIAAm1IKPAAIAAG1g");
        var mask_graphics_28 = new cjs.Graphics().p("AljDsIAAnXILHAAIAAHXg");
        var mask_graphics_29 = new cjs.Graphics().p("Al9ExIAAphIL7AAIAAJhg");
        var mask_graphics_30 = new cjs.Graphics().p("AmXF3IAArsIMvAAIAALsg");
        var mask_graphics_31 = new cjs.Graphics().p("AmxG8IAAt3INjAAIAAN3g");
        var mask_graphics_32 = new cjs.Graphics().p("AnMIBIAAwCIOZAAIAAQCg");
        this.timeline.addTween(cjs.Tween.get(mask).to({ graphics: null, x: 0, y: 0 }).wait(16).to({ graphics: mask_graphics_16, x: 4, y: 90.3 }).wait(1).to({ graphics: mask_graphics_17, x: 4, y: 87.7 }).wait(1).to({ graphics: mask_graphics_18, x: 3.9, y: 85.1 }).wait(1).to({ graphics: mask_graphics_19, x: 3.9, y: 82.5 }).wait(1).to({ graphics: mask_graphics_20, x: 3.8, y: 80 }).wait(1).to({ graphics: mask_graphics_21, x: 7.2, y: 80 }).wait(1).to({ graphics: mask_graphics_22, x: 10.5, y: 80 }).wait(1).to({ graphics: mask_graphics_23, x: 13.9, y: 80 }).wait(1).to({ graphics: mask_graphics_24, x: 17.2, y: 80 }).wait(1).to({ graphics: mask_graphics_25, x: 20, y: 80 }).wait(1).to({ graphics: mask_graphics_26, x: 22.8, y: 80.1 }).wait(1).to({ graphics: mask_graphics_27, x: 25.6, y: 80.1 }).wait(1).to({ graphics: mask_graphics_28, x: 28.4, y: 80.1 }).wait(1).to({ graphics: mask_graphics_29, x: 28.4, y: 73.2 }).wait(1).to({ graphics: mask_graphics_30, x: 28.4, y: 66.3 }).wait(1).to({ graphics: mask_graphics_31, x: 28.4, y: 59.4 }).wait(1).to({ graphics: mask_graphics_32, x: 28.4, y: 52.5 }).wait(48));
        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#7DB1CA").s().p("AlMGaQgGgDgCgGQgCgGADgGIBdi6QAFgKAMABIEPAuICwiEIBdn5QABgHAFgDQAFgEAHABQAGABAEAGQADAFgBAGIhdH/QgBAHgFADIi6CMQgFAEgHgBIkLgtIhYCwQgEAIgKAAQgEAAgDgBg");
        this.shape_18.setTransform(37.3, 45.8);
        this.shape_18._off = true;
        var maskedShapeInstanceList = [this.shape_18];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(16).to({ _off: false }, 0).wait(64));
        var mask_1 = new cjs.Shape();
        mask_1._off = true;
        var mask_1_graphics_0 = new cjs.Graphics().p("AhJDOIAAmbICTAAIAAGbg");
        var mask_1_graphics_1 = new cjs.Graphics().p("AheDOIAAmbIC8AAIAAGbg");
        var mask_1_graphics_2 = new cjs.Graphics().p("AhyDOIAAmbIDlAAIAAGbg");
        var mask_1_graphics_3 = new cjs.Graphics().p("AiHDOIAAmbIEPAAIAAGbg");
        var mask_1_graphics_4 = new cjs.Graphics().p("AibDOIAAmbIE3AAIAAGbg");
        var mask_1_graphics_5 = new cjs.Graphics().p("AioDOIAAmbIFRAAIAAGbg");
        var mask_1_graphics_6 = new cjs.Graphics().p("Ai0DOIAAmbIFoAAIAAGbg");
        var mask_1_graphics_7 = new cjs.Graphics().p("AjADOIAAmbIGBAAIAAGbg");
        var mask_1_graphics_8 = new cjs.Graphics().p("AjMDOIAAmbIGZAAIAAGbg");
        var mask_1_graphics_9 = new cjs.Graphics().p("AjjD9IAAn5IHHAAIAAH5g");
        var mask_1_graphics_10 = new cjs.Graphics().p("Aj6EsIAApXIH1AAIAAJXg");
        var mask_1_graphics_11 = new cjs.Graphics().p("AkSFbIAAq1IIkAAIAAK1g");
        var mask_1_graphics_12 = new cjs.Graphics().p("AkpGKIAAsTIJSAAIAAMTg");
        var mask_1_graphics_13 = new cjs.Graphics().p("AlPGvIAAtdIKfAAIAANdg");
        var mask_1_graphics_14 = new cjs.Graphics().p("Al2HVIAAuoILtAAIAAOog");
        var mask_1_graphics_15 = new cjs.Graphics().p("AmdH6IAAvzIM7AAIAAPzg");
        var mask_1_graphics_16 = new cjs.Graphics().p("AnEIfIAAw+IOJAAIAAQ+g");
        this.timeline.addTween(cjs.Tween.get(mask_1).to({ graphics: mask_1_graphics_0, x: -1.1, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_1, x: 1, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_2, x: 3.1, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_3, x: 5.1, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_4, x: 7.2, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_5, x: 8.4, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_6, x: 9.6, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_7, x: 10.8, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_8, x: 12, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_9, x: 14.3, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_10, x: 16.6, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_11, x: 18.9, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_12, x: 21.2, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_13, x: 25.1, y: 36.7 }).wait(1).to({ graphics: mask_1_graphics_14, x: 29, y: 36.8 }).wait(1).to({ graphics: mask_1_graphics_15, x: 32.8, y: 36.8 }).wait(1).to({ graphics: mask_1_graphics_16, x: 36.7, y: 36.8 }).wait(64));
        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#7DB1CA").s().p("AFvDJIkXhdQgFgCgDgEIitkEIhQBqQgDAFgGABQgGABgFgDIi6hsQgGgDgBgGQgCgHADgFQADgGAGgBQAHgCAFADICvBmIBUhxQAFgHAIAAQAIABAFAGIC2ESIESBcQAGACADAFQADAGgCAGQgEALgLAAg");
        this.shape_19.setTransform(41.9, 55.9);
        var maskedShapeInstanceList = [this.shape_19];
        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
        }
        this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(80));
        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgPA2IAAhrIAfAAIAABrg");
        this.shape_20.setTransform(79.2, 79.9);
        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AgPGLIAAsWIAeAAIAAMWg");
        this.shape_21.setTransform(69.9, 45.8);
        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AgOCTIAAklIAdAAIAAElg");
        this.shape_22.setTransform(60.6, 70.6);
        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AgPBlIAAjJIAfAAIAADJg");
        this.shape_23.setTransform(51.3, 75.3);
        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#FFFFFF").s().p("AgPBGIAAiLIAfAAIAACLg");
        this.shape_24.setTransform(41.9, 78.4);
        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFFFFF").s().p("AgPDwIAAnfIAfAAIAAHfg");
        this.shape_25.setTransform(32.6, 61.3);
        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FFFFFF").s().p("AgPBdIAAi5IAfAAIAAC5g");
        this.shape_26.setTransform(14, 76.1);
        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FFFFFF").s().p("AgOCyIAAljIAdAAIAAFjg");
        this.shape_27.setTransform(23.3, 67.5);
        this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }] }).wait(80));
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(45, 45, 90, 90);
    lib.properties = {
        width: 90,
        height: 90,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.00,
        webfonts: {},
        manifest: [],
        preloads: []
    };
})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib, images, createjs, ss, AdobeAn;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function init5() {
    canvas = document.getElementById("canvas5");
    anim_container = document.getElementById("animation_container5");
    dom_overlay_container = document.getElementById("dom_overlay_container5");
    handleComplete5();
})();
function handleComplete5() {
    exportRoot = new lib.qtyoftransaction();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    };
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}
//# sourceMappingURL=icons.js.map