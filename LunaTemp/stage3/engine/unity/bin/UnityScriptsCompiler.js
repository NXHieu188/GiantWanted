if ( TRACE ) { TRACE( JSON.parse( '["AutoDestroy#init","AutoDestroy#OnEnable","AutoDestroy#Update","AutoDestroy#OnDestroy","AutoDestroy#OnDisable","AutoDestructor#init","AutoDestructor#OnEnable","AutoDestructor#AutoDestroy","AutoDestructor#OnDisable","BaseEnemy#Init","BaseEnemy#EnemyHit","BaseEnemy#Update","BaseGun#init","BaseGun#Preparing","BaseGun#ExploreFx","BaseGun#FireBullet","BaseGun#CheckTargetToTakeDamage","BaseGun#IEDelaySetup","Boxophobic.StyledGUI.StyledBanner#$ctor3","Boxophobic.StyledGUI.StyledBanner#$ctor4","Boxophobic.StyledGUI.StyledBanner#ctor","Boxophobic.StyledGUI.StyledBanner#$ctor1","Boxophobic.StyledGUI.StyledBanner#$ctor5","Boxophobic.StyledGUI.StyledBanner#$ctor2","Boxophobic.StyledGUI.StyledButton#init","Boxophobic.StyledGUI.StyledButton#ctor","Boxophobic.StyledGUI.StyledButton#$ctor1","Boxophobic.StyledGUI.StyledCategory#ctor","Boxophobic.StyledGUI.StyledCategory#$ctor1","Boxophobic.StyledGUI.StyledCategory#$ctor3","Boxophobic.StyledGUI.StyledCategory#$ctor2","Boxophobic.StyledGUI.StyledEnum#init","Boxophobic.StyledGUI.StyledEnum#ctor","Boxophobic.StyledGUI.StyledEnum#$ctor1","Boxophobic.StyledGUI.StyledIndent#ctor","Boxophobic.StyledGUI.StyledInteractive#ctor","Boxophobic.StyledGUI.StyledLayers#init","Boxophobic.StyledGUI.StyledLayers#ctor","Boxophobic.StyledGUI.StyledLayers#$ctor1","Boxophobic.StyledGUI.StyledMask#init","Boxophobic.StyledGUI.StyledMask#ctor","Boxophobic.StyledGUI.StyledMask#$ctor1","Boxophobic.StyledGUI.StyledMessage#ctor","Boxophobic.StyledGUI.StyledMessage#$ctor1","Boxophobic.StyledGUI.StyledRangeOptions#ctor","Boxophobic.StyledGUI.StyledSpace#ctor","Boxophobic.StyledGUI.StyledText#init","Boxophobic.StyledGUI.StyledText#ctor","Boxophobic.StyledGUI.StyledText#$ctor1","Boxophobic.StyledGUI.StyledText#$ctor2","Boxophobic.StyledGUI.StyledTexturePreview#init","Boxophobic.StyledGUI.StyledTexturePreview#ctor","Boxophobic.StyledGUI.StyledTexturePreview#$ctor1","Boxophobic.Utils.SettingsData#init","BuildingController#OnTriggerEnter","BulletController#Awake","BulletController#OnCollisionEnter","BulletRotation#Update","CameraController#Init","CameraController#LateUpdate","CameraController#SetUpLastShootCamera","CameraController#IESetUp","ControllerOnPointer#ClampAngle","ControllerOnPointer#init","ControllerOnPointer#Start","ControllerOnPointer#OnPointerDown","ControllerOnPointer#OnDrag","ControllerOnPointer#OnPointerUp","ControllerOnPointer#OnScoped","ControllerOnPointer#UnScoped","ControllerOnPointer#Shooting","CutOutMaskUI#materialForRendering#get","DefineHelper#init","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","EventDispatcher#Instance#get","EventDispatcher#Instance#set","EventDispatcher#HasInstance","EventDispatcher#init","EventDispatcher#Awake","EventDispatcher#OnDestroy","EventDispatcher#RegisterListener","EventDispatcher#PostEvent","EventDispatcher#RemoveListener","EventDispatcher#ClearAllListener","EventDispatcherExtension#RegisterListener","EventDispatcherExtension#PostEvent$1","EventDispatcherExtension#PostEvent","EventDispatcherExtension#RemoveListener","SingletonMono$1#init","SingletonMono$1#Awake","HelperUtility#DecimalRounding","HelperUtility#DisruptiveArrayObject","HelperUtility#DisruptiveListObject$1","HelperUtility#DisruptiveListObject","HelperUtility#DisruptiveList","HelperUtility#DisruptiveListSelf","HelperUtility#SelectionSortList","HelperUtility#StartThread","HelperUtility#StartThread$1","HelperUtility#StartAction$1","HelperUtility#StartAction","HelperUtility#StartActionRealTime","HelperUtility#StartActionNotUseCorutines","HelperUtility#GetPointDistanceFromObject","HelperUtility#GetDirectionFromAngle","HelperUtility#GetDirectionFromAngle_2","HelperUtility#DOLocalRotateQuaternion","HelperUtility#GetRotateDirection","HelperUtility#LookAtToDirection","HelperUtility#LookAtToDirectionAngleDetal","HelperUtility#LookAtToPosition","HelperUtility#LookAtToPositionAngleDetal","HelperUtility#RandomCustom","HelperUtility#RandomUnduplicated$1","HelperUtility#RandomUnduplicated","HelperUtility#SetPos","HelperUtility#PosHandle","MMMaths#Vector3ToVector2","MMMaths#Vector2ToVector3","MMMaths#Vector2ToVector3$1","MMMaths#RandomVector3","MMMaths#RotatePointAroundPivot","MMMaths#RotatePointAroundPivot$1","MMMaths#Sum","MMMaths#RollADice","MMMaths#Chance","MMMaths#Approach","NameTag#init","PlayerController#init","PlayerController#Start","PlayerController#Update","PlayerController#OnScoped","PlayerController#UnScoped","RotateObject#Start","ScopeController#OnEnable","ScopeController#OnDisable","SimplePool#init","SimplePool#Init","SimplePool#PoolPreLoad","SimplePool#Preload","SimplePool#Spawn$3","SimplePool#Spawn$2","SimplePool#Spawn","SimplePool#Spawn$1","SimplePool#Despawn","SimplePool#GetStackCount","SimplePool#ClearPool","SimplePool.Pool#StackCount#get","SimplePool.Pool#init","SimplePool.Pool#ctor","SimplePool.Pool#Preload","SimplePool.Pool#Spawn$1","SimplePool.Pool#Spawn","SimplePool.Pool#Despawn","SingletonWithouMono$1#Instance#get","SingletonWithouMono$1#init","SingletonWithouMono$1#init","SingletonWithouMono$1#Initialize","SingletonWithouMono$1#Preload","VectorUlti#GetVectorFromAngle","VectorUlti#GetAngleFromVector","VectorUlti#Set$1","VectorUlti#Set","VectorUlti#Move","VectorUlti#ToVectorXZ","Singleton$1#Instance#get","GameManager1#inherits","GameManager1#Start","GameManager1#Update","GameManager1#UnActiveGuide","GameManager1#SetUpWhenShotMissed","GameManager1#SetUpCameraEnd","GameManager1#SetUpToEnd","GameManager1#InstallFullGame","GlobalInstance#inherits","GlobalInstance#init","SingletonDontDestroyOnLoad$1#Awake","SoundController#inherits","SoundController#PlaySoundShoot","SoundController#PlaySoundGiantHit","SoundController#PlayReload1","SoundController#PlayReload2","SoundController#PlayReload3","SoundController#PlaySoundFX","SoundController#PlaySoundBG","SoundController#StopSound"]' ) ); }
/**
 * @version 1.0.8127.18787
 * @copyright anton
 * @compiler Bridge.NET 17.9.13-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AutoDestroy start.*/
    Bridge.define("AutoDestroy", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeOut: 0,
            typeDestroy: 0,
            timeStart: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AutoDestroy#init", this ); }

                this.timeOut = 0.5;
                this.typeDestroy = TypeDestroy.DISABLE;
            }
        },
        methods: {
            /*AutoDestroy.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnEnable", this ); }

                this.timeStart = UnityEngine.Time.time;
            },
            /*AutoDestroy.OnEnable end.*/

            /*AutoDestroy.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "AutoDestroy#Update", this ); }

                if (UnityEngine.Time.time - this.timeStart > this.timeOut) {
                    this.OnDestroy();
                }
            },
            /*AutoDestroy.Update end.*/

            /*AutoDestroy.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnDestroy", this ); }

                if (this.typeDestroy === TypeDestroy.DISABLE) {
                    this.gameObject.SetActive(false);
                } else {
                    if (this.typeDestroy === TypeDestroy.RESPAWNER) {
                        SimplePool.Despawn(this.gameObject);
                    } else {
                        if (this.typeDestroy === TypeDestroy.DESTROY) {
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        }
                    }
                }
            },
            /*AutoDestroy.OnDestroy end.*/

            /*AutoDestroy.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "AutoDestroy#OnDisable", this ); }

                this.OnDestroy();
            },
            /*AutoDestroy.OnDisable end.*/


        }
    });
    /*AutoDestroy end.*/

    /*AutoDestructor start.*/
    Bridge.define("AutoDestructor", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeDestroy: 0,
            isPutToPool: false,
            typeDestroy: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "AutoDestructor#init", this ); }

                this.timeDestroy = 1.5;
                this.isPutToPool = true;
            }
        },
        methods: {
            /*AutoDestructor.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "AutoDestructor#OnEnable", this ); }

                this.Invoke("AutoDestroy", this.timeDestroy);
            },
            /*AutoDestructor.OnEnable end.*/

            /*AutoDestructor.AutoDestroy start.*/
            AutoDestroy: function () {
if ( TRACE ) { TRACE( "AutoDestructor#AutoDestroy", this ); }

                if (this.isPutToPool) {
                    SimplePool.Despawn(this.gameObject);
                } else {
                    switch (this.typeDestroy) {
                        case AutoDestructor.TypeDestroy.Disable: 
                            this.gameObject.SetActive(false);
                            break;
                        case AutoDestructor.TypeDestroy.PutToPool: 
                            SimplePool.Despawn(this.gameObject);
                            break;
                        case AutoDestructor.TypeDestroy.Destroy: 
                        default: 
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                            break;
                    }

                }
            },
            /*AutoDestructor.AutoDestroy end.*/

            /*AutoDestructor.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "AutoDestructor#OnDisable", this ); }

                this.CancelInvoke();
            },
            /*AutoDestructor.OnDisable end.*/


        }
    });
    /*AutoDestructor end.*/

    /*AutoDestructor+TypeDestroy start.*/
    Bridge.define("AutoDestructor.TypeDestroy", {
        $kind: "nested enum",
        statics: {
            fields: {
                Disable: 0,
                PutToPool: 1,
                Destroy: 2
            }
        }
    });
    /*AutoDestructor+TypeDestroy end.*/

    /*BaseEnemy start.*/
    Bridge.define("BaseEnemy", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hp: 0,
            speed: 0,
            pointTargetMove: null,
            anim: null,
            hpImg: null,
            hpBar: null,
            isHit: false,
            currentHp: 0,
            pointLastShootCam: null,
            posZEnd: 0
        },
        methods: {
            /*BaseEnemy.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "BaseEnemy#Init", this ); }

                //Movement();
                this.currentHp = this.hp;
            },
            /*BaseEnemy.Init end.*/

            /*BaseEnemy.EnemyHit start.*/
            EnemyHit: function (damage) {
if ( TRACE ) { TRACE( "BaseEnemy#EnemyHit", this ); }

                this.currentHp -= damage;

                if (this.currentHp < 0) {
                    this.currentHp = 0;
                }
                this.hpBar.SetActive(true);
                DG.Tweening.DOTweenModuleUI.DOFillAmount(this.hpImg, (this.currentHp / this.hp), 0.4);
                this.anim.SetTrigger$1("Hit");
                this.isHit = true;
                Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlaySoundGiantHit();
                this.StartCoroutine$1(HelperUtility.StartAction$1(Bridge.fn.bind(this, function () {
                    this.isHit = false;
                }), 0.7));
            },
            /*BaseEnemy.EnemyHit end.*/

            /*BaseEnemy.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BaseEnemy#Update", this ); }

                if (!this.isHit) {
                    if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.isSetToEnd) {
                        if (this.transform.position.z <= this.posZEnd) {
                            Luna.Unity.Analytics.LogEvent$1("Go to destination", 0);
                            Singleton$1(GlobalInstance).Instance.gameManagerInstance.SetUpToEnd();
                            Singleton$1(GlobalInstance).Instance.gameManagerInstance.SetUpCameraEnd();
                        }
                        if (this.transform.position.z > this.pointTargetMove.position.z) {
                            var z = this.transform.position.z - this.speed;
                            this.transform.position = new pc.Vec3( this.transform.position.x, this.transform.position.y, z );
                        }
                    }
                }
            },
            /*BaseEnemy.Update end.*/


        }
    });
    /*BaseEnemy end.*/

    /*BaseGun start.*/
    Bridge.define("BaseGun", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gun: null,
            canvasGun: null,
            loadBulletPos: null,
            loadBulletRot: null,
            fireFx: null,
            prefBullet: null,
            pointShoot: null,
            bulletObject: null,
            shootForce: 0,
            isShootBulletFollowCamera: false,
            hitObject: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BaseGun#init", this ); }

                this.loadBulletPos = new UnityEngine.Vector3();
                this.loadBulletRot = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*BaseGun.Preparing start.*/
            Preparing: function () {
if ( TRACE ) { TRACE( "BaseGun#Preparing", this ); }

                Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlayReload1();
                this.StartCoroutine$1(HelperUtility.StartAction$1(function () {
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlayReload2();
                }, 0.18));
                this.StartCoroutine$1(HelperUtility.StartAction$1(function () {
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlayReload3();
                }, 0.35));
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.gameObject.transform, this.loadBulletPos.$clone(), 0.3), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DOLocalRotate(this.gameObject.transform, this.loadBulletRot.$clone(), 0.3), Bridge.fn.bind(this, function () {
                        DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DOLocalRotate(this.gameObject.transform, new pc.Vec3( 0, 0, 0.0 ), 0.2), Bridge.fn.bind(this, function () {
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.gameObject.transform, new pc.Vec3( 0.9, -2.0, 1.0 ), 0.3), DG.Tweening.Ease.OutExpo), function () {
                                Singleton$1(GlobalInstance).Instance.gameManagerInstance.controllerOnPoint.isInteractive = true;
                            });
                        }));
                    }));
                }));
            },
            /*BaseGun.Preparing end.*/

            /*BaseGun.ExploreFx start.*/
            ExploreFx: function () {
if ( TRACE ) { TRACE( "BaseGun#ExploreFx", this ); }

                this.fireFx.Play();
            },
            /*BaseGun.ExploreFx end.*/

            /*BaseGun.FireBullet start.*/
            FireBullet: function () {
if ( TRACE ) { TRACE( "BaseGun#FireBullet", this ); }

                this.CheckTargetToTakeDamage();
                if (this.isShootBulletFollowCamera) {
                    this.bulletObject = SimplePool.Spawn$3(this.prefBullet.gameObject, new pc.Vec3( this.pointShoot.transform.position.x, this.pointShoot.transform.position.y - 4.5, this.pointShoot.transform.position.z ), pc.Quat.IDENTITY.clone());
                    var duration = this.hitObject.pointLastShootCam.position.z / 12;
                    DG.Tweening.ShortcutExtensions.DOMove(this.bulletObject.transform, this.hitObject.pointLastShootCam.position.$clone(), duration);
                    this.bulletObject.GetComponent(UnityEngine.Rigidbody).useGravity = false;
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.cameraController.SetUpLastShootCamera();
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.isShootLastBullet = true;
                    this.gun.SetActive(false);
                    this.canvasGun.SetActive(false);
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.SetUpWhenShotMissed();
                    this.StartCoroutine$1(this.IEDelaySetup(duration - duration / 2));
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlaySoundShoot();

                } else {
                    this.bulletObject = SimplePool.Spawn$3(this.prefBullet.gameObject, new pc.Vec3( this.pointShoot.transform.position.x, this.pointShoot.transform.position.y - 4.5, this.pointShoot.transform.position.z ), pc.Quat.IDENTITY.clone());
                    var bulletRigid = this.bulletObject.GetComponent(UnityEngine.Rigidbody);
                    bulletRigid.AddForce$1(this.pointShoot.transform.forward.$clone().clone().scale( this.shootForce ), UnityEngine.ForceMode.Impulse);
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.soundManager.PlaySoundShoot();
                }
            },
            /*BaseGun.FireBullet end.*/

            /*BaseGun.CheckTargetToTakeDamage start.*/
            CheckTargetToTakeDamage: function () {
if ( TRACE ) { TRACE( "BaseGun#CheckTargetToTakeDamage", this ); }

                var hit = { v : new UnityEngine.RaycastHit() };
                if (UnityEngine.Physics.Raycast$3(this.pointShoot.transform.position, this.pointShoot.transform.forward, hit, window.Infinity)) {
                    if (hit.v.transform.CompareTag(NameTag.Enemy)) {
                        this.hitObject = hit.v.transform.gameObject.GetComponentInParent(BaseEnemy);
                        if (this.hitObject.currentHp < this.hitObject.hp) {
                            this.isShootBulletFollowCamera = true;
                        }

                    }
                }
            },
            /*BaseGun.CheckTargetToTakeDamage end.*/

            /*BaseGun.IEDelaySetup start.*/
            IEDelaySetup: function (time) {
if ( TRACE ) { TRACE( "BaseGun#IEDelaySetup", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(time);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    DG.Tweening.ShortcutExtensions.DOKill(this.bulletObject.gameObject.transform);
                                        this.bulletObject.SetActive(false);
                                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.SetUpToEnd();
                                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.SetUpCameraEnd();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*BaseGun.IEDelaySetup end.*/


        }
    });
    /*BaseGun end.*/

    /*Boxophobic.StyledGUI.StyledBanner start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledBanner", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            colorR: 0,
            colorG: 0,
            colorB: 0,
            title: null,
            helpURL: null
        },
        ctors: {
            $ctor3: function (title) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#$ctor3", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = -1;
                this.title = title;
                this.helpURL = "";
            },
            $ctor4: function (title, helpURL) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#$ctor4", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = -1;
                this.title = title;
                this.helpURL = helpURL;
            },
            ctor: function (colorR, colorG, colorB, title) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = colorR;
                this.colorG = colorG;
                this.colorB = colorB;
                this.title = title;
                this.helpURL = "";
            },
            $ctor1: function (colorR, colorG, colorB, title, helpURL) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = colorR;
                this.colorG = colorG;
                this.colorB = colorB;
                this.title = title;
                this.helpURL = helpURL;
            },
            $ctor5: function (title, subtitle, helpURL) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#$ctor5", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = -1;
                this.title = title;
                this.helpURL = helpURL;
            },
            $ctor2: function (colorR, colorG, colorB, title, subtitle, helpURL) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledBanner#$ctor2", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.colorR = colorR;
                this.colorG = colorG;
                this.colorB = colorB;
                this.title = title;
                this.helpURL = helpURL;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledBanner end.*/

    /*Boxophobic.StyledGUI.StyledButton start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledButton", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            text: null,
            top: 0,
            down: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledButton#init", this ); }

                this.text = "";
                this.top = 0;
                this.down = 0;
            },
            ctor: function (Text) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledButton#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.text = Text;
                this.top = 0;
                this.down = 0;
            },
            $ctor1: function (Text, Top, Down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledButton#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.text = Text;
                this.top = Top;
                this.down = Down;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledButton end.*/

    /*Boxophobic.StyledGUI.StyledCategory start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledCategory", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            category: null,
            top: 0,
            down: 0,
            colapsable: false
        },
        ctors: {
            ctor: function (category) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledCategory#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.category = category;
                this.top = 10;
                this.down = 10;
                this.colapsable = false;
            },
            $ctor1: function (category, colapsable) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledCategory#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.category = category;
                this.top = 10;
                this.down = 10;
                this.colapsable = colapsable;
            },
            $ctor3: function (category, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledCategory#$ctor3", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.category = category;
                this.top = top;
                this.down = down;
                this.colapsable = false;
            },
            $ctor2: function (category, top, down, colapsable) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledCategory#$ctor2", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.category = category;
                this.top = top;
                this.down = down;
                this.colapsable = colapsable;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledCategory end.*/

    /*Boxophobic.StyledGUI.StyledEnum start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledEnum", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            display: null,
            file: null,
            options: null,
            top: 0,
            down: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledEnum#init", this ); }

                this.display = "";
                this.file = "";
                this.options = "";
                this.top = 0;
                this.down = 0;
            },
            ctor: function (file, options, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledEnum#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.file = file;
                this.options = options;

                this.top = top;
                this.down = down;
            },
            $ctor1: function (display, file, options, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledEnum#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.display = display;
                this.file = file;
                this.options = options;

                this.top = top;
                this.down = down;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledEnum end.*/

    /*Boxophobic.StyledGUI.StyledIndent start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledIndent", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            indent: 0
        },
        ctors: {
            ctor: function (indent) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledIndent#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.indent = indent;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledIndent end.*/

    /*Boxophobic.StyledGUI.StyledInteractive start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledInteractive", {
        inherits: [UnityEngine.PropertyAttribute],
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledInteractive#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);

            }
        }
    });
    /*Boxophobic.StyledGUI.StyledInteractive end.*/

    /*Boxophobic.StyledGUI.StyledLayers start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledLayers", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            display: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledLayers#init", this ); }

                this.display = "";
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledLayers#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
            },
            $ctor1: function (display) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledLayers#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.display = display;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledLayers end.*/

    /*Boxophobic.StyledGUI.StyledMask start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledMask", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            display: null,
            file: null,
            options: null,
            top: 0,
            down: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledMask#init", this ); }

                this.display = "";
                this.file = "";
                this.options = "";
                this.top = 0;
                this.down = 0;
            },
            ctor: function (file, options, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledMask#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.file = file;
                this.options = options;

                this.top = top;
                this.down = down;
            },
            $ctor1: function (display, file, options, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledMask#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.display = display;
                this.file = file;
                this.options = options;

                this.top = top;
                this.down = down;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledMask end.*/

    /*Boxophobic.StyledGUI.StyledMessage start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledMessage", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            type: null,
            message: null,
            top: 0,
            down: 0
        },
        ctors: {
            ctor: function (Type, Message) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledMessage#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.type = Type;
                this.message = Message;
                this.top = 0;
                this.down = 0;
            },
            $ctor1: function (Type, Message, Top, Down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledMessage#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.type = Type;
                this.message = Message;
                this.top = Top;
                this.down = Down;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledMessage end.*/

    /*Boxophobic.StyledGUI.StyledRangeOptions start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledRangeOptions", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            display: null,
            min: 0,
            max: 0,
            options: null
        },
        ctors: {
            ctor: function (display, min, max, options) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledRangeOptions#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.display = display;
                this.min = min;
                this.max = max;

                this.options = options;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledRangeOptions end.*/

    /*Boxophobic.StyledGUI.StyledSpace start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledSpace", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            space: 0
        },
        ctors: {
            ctor: function (space) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledSpace#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.space = space;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledSpace end.*/

    /*Boxophobic.StyledGUI.StyledText start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledText", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            text: null,
            alignment: 0,
            top: 0,
            down: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledText#init", this ); }

                this.text = "";
                this.alignment = UnityEngine.TextAnchor.MiddleCenter;
                this.top = 0;
                this.down = 0;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledText#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);

            },
            $ctor1: function (alignment) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledText#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.alignment = alignment;
            },
            $ctor2: function (alignment, top, down) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledText#$ctor2", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.alignment = alignment;
                this.top = top;
                this.down = down;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledText end.*/

    /*Boxophobic.StyledGUI.StyledTexturePreview start.*/
    Bridge.define("Boxophobic.StyledGUI.StyledTexturePreview", {
        inherits: [UnityEngine.PropertyAttribute],
        fields: {
            displayName: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledTexturePreview#init", this ); }

                this.displayName = "";
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledTexturePreview#ctor", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.displayName = "";
            },
            $ctor1: function (displayName) {
if ( TRACE ) { TRACE( "Boxophobic.StyledGUI.StyledTexturePreview#$ctor1", this ); }

                this.$initialize();
                UnityEngine.PropertyAttribute.ctor.call(this);
                this.displayName = displayName;
            }
        }
    });
    /*Boxophobic.StyledGUI.StyledTexturePreview end.*/

    /*Boxophobic.Utils.SettingsData start.*/
    Bridge.define("Boxophobic.Utils.SettingsData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            data: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Boxophobic.Utils.SettingsData#init", this ); }

                this.data = "";
            }
        }
    });
    /*Boxophobic.Utils.SettingsData end.*/

    /*BuildingController start.*/
    Bridge.define("BuildingController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            buildingCheck: null,
            buildingRigid: null
        },
        methods: {
            /*BuildingController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "BuildingController#OnTriggerEnter", this ); }

                if (other.gameObject.CompareTag(NameTag.Enemy)) {
                    this.buildingCheck.SetActive(false);
                    this.buildingRigid.SetActive(true);
                }
            },
            /*BuildingController.OnTriggerEnter end.*/


        }
    });
    /*BuildingController end.*/

    /*BulletController start.*/
    Bridge.define("BulletController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bloodFx: null,
            transBulletCamera: null,
            transBulletCamera2: null,
            damage: 0,
            force: 0,
            BulletRigid: null
        },
        methods: {
            /*BulletController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BulletController#Awake", this ); }

                this.BulletRigid = this.GetComponent(UnityEngine.Rigidbody);
            },
            /*BulletController.Awake end.*/

            /*BulletController.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "BulletController#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag(NameTag.Enemy)) {
                    var contact = collision.GetContact(0);
                    var rot = new pc.Quat().fromTo( pc.Vec3.UP.clone(), contact.normal );
                    var pos = contact.point.$clone();
                    SimplePool.Spawn$1(UnityEngine.ParticleSystem, this.bloodFx, pos.$clone(), rot.$clone());
                    var baseEnemy = collision.gameObject.GetComponentInParent(BaseEnemy);
                    baseEnemy.EnemyHit(this.damage);
                }
                this.BulletRigid.velocity = pc.Vec3.ZERO.clone();
                SimplePool.Despawn(this.gameObject);
            },
            /*BulletController.OnCollisionEnter end.*/


        }
    });
    /*BulletController end.*/

    /*BulletRotation start.*/
    Bridge.define("BulletRotation", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*BulletRotation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BulletRotation#Update", this ); }

                this.transform.Rotate(0, 10000.0 * UnityEngine.Time.deltaTime, 0);
            },
            /*BulletRotation.Update end.*/


        }
    });
    /*BulletRotation end.*/

    /*CameraController start.*/
    Bridge.define("CameraController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isLastShootCamera: false,
            posFollow: null
        },
        methods: {
            /*CameraController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "CameraController#Init", this ); }


            },
            /*CameraController.Init end.*/

            /*CameraController.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraController#LateUpdate", this ); }

                if (this.isLastShootCamera && !Singleton$1(GlobalInstance).Instance.gameManagerInstance.isSetToEnd) {
                    var relativePos = Singleton$1(GlobalInstance).Instance.gameManagerInstance.baseGun.bulletObject.transform.position.$clone().sub( this.transform.position );
                    var lookRotation = new pc.Quat().setLookAt( relativePos, pc.Vec3.UP.clone() );
                    this.transform.rotation = pc.Quat.rotateTowards( this.transform.rotation.$clone(), lookRotation.$clone(), 0.2 );
                    //transform.position = posFollow.transform.position;
                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, this.posFollow.transform.position, 0.4 );
                }
            },
            /*CameraController.LateUpdate end.*/

            /*CameraController.SetUpLastShootCamera start.*/
            SetUpLastShootCamera: function () {
if ( TRACE ) { TRACE( "CameraController#SetUpLastShootCamera", this ); }

                this.StartCoroutine$1(this.IESetUp(0.5));
            },
            /*CameraController.SetUpLastShootCamera end.*/

            /*CameraController.IESetUp start.*/
            IESetUp: function (times) {
if ( TRACE ) { TRACE( "CameraController#IESetUp", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    bulletCamera,
                    bulletCamera2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    bulletCamera = Singleton$1(GlobalInstance).Instance.gameManagerInstance.baseGun.bulletObject.GetComponent(BulletController).transBulletCamera;
                                        bulletCamera2 = Singleton$1(GlobalInstance).Instance.gameManagerInstance.baseGun.bulletObject.GetComponent(BulletController).transBulletCamera2;
                                        this.transform.position = bulletCamera.transform.position.$clone();
                                        //transform.rotation = bulletCamera.transform.rotation;
                                        this.isLastShootCamera = true;
                                        this.posFollow = bulletCamera2.transform;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CameraController.IESetUp end.*/


        }
    });
    /*CameraController end.*/

    /*ControllerOnPointer start.*/
    Bridge.define("ControllerOnPointer", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IPointerUpHandler],
        statics: {
            methods: {
                /*ControllerOnPointer.ClampAngle:static start.*/
                ClampAngle: function (angle, min, max) {
if ( TRACE ) { TRACE( "ControllerOnPointer#ClampAngle", this ); }

                    var start = (min + max) * 0.5 - 180;
                    var floor = Bridge.Int.mul(Math.floor((angle - start) / 360), 360);
                    min += floor;
                    max += floor;
                    return Math.max(min, Math.min(angle, max));
                },
                /*ControllerOnPointer.ClampAngle:static end.*/


            }
        },
        fields: {
            scopeOverlay: null,
            gunMovingPos: null,
            FOVscoped: 0,
            FOVcache: 0,
            smoothTime: 0,
            leftCamBound: 0,
            upCamBound: 0,
            rightCamBound: 0,
            downCamBound: 0,
            sniperGun: null,
            isStartClick: false,
            isShooting: false,
            isInteractive: false,
            isCanShoot: false,
            lastMousePosition: null
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ControllerOnPointer#init", this ); }

                this.gunMovingPos = new UnityEngine.Vector3();
                this.lastMousePosition = new UnityEngine.Vector3();
                this.isStartClick = false;
                this.isShooting = false;
            }
        },
        methods: {
            /*ControllerOnPointer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ControllerOnPointer#Start", this ); }

                this.isInteractive = false;
            },
            /*ControllerOnPointer.Start end.*/

            /*ControllerOnPointer.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "ControllerOnPointer#OnPointerDown", this ); }

                if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.isShootLastBullet && !Singleton$1(GlobalInstance).Instance.gameManagerInstance.isSetToEnd) {
                    if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.fistTouch) {
                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.fistTouch = true;
                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.UnActiveGuide();
                    }
                    this.isStartClick = true;
                    this.lastMousePosition = UnityEngine.Input.mousePosition.$clone();
                    if (this.isInteractive) {
                        this.isStartClick = false;
                        this.OnScoped();
                    }
                }
            },
            /*ControllerOnPointer.OnPointerDown end.*/

            /*ControllerOnPointer.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "ControllerOnPointer#OnDrag", this ); }

                if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.isShootLastBullet && !Singleton$1(GlobalInstance).Instance.gameManagerInstance.isSetToEnd) {
                    if (this.isStartClick && this.isInteractive) {
                        this.OnScoped();
                    }
                    if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.fistTouch) {
                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.fistTouch = true;
                        Singleton$1(GlobalInstance).Instance.gameManagerInstance.UnActiveGuide();
                    }
                    var delta = UnityEngine.Input.mousePosition.$clone().sub( this.lastMousePosition );
                    var velocity = { v : 0.0 };
                    delta = delta.$clone().scale( 1.0 / ( UnityEngine.Time.deltaTime ) ).clone().scale( UnityEngine.Mathf.SmoothDamp(0, 0.007, velocity, this.smoothTime) );

                    this.lastMousePosition = UnityEngine.Input.mousePosition.$clone();
                    var relativePos = new pc.Vec3( -delta.y, delta.x, 0 );
                    var startRotation = Singleton$1(GlobalInstance).Instance.gameManagerInstance.mainCamera.transform.eulerAngles.$clone();
                    var targetRotation = startRotation.$clone().add( relativePos );

                    targetRotation.x = ControllerOnPointer.ClampAngle(targetRotation.x, this.upCamBound, this.downCamBound);
                    targetRotation.y = ControllerOnPointer.ClampAngle(targetRotation.y, this.leftCamBound, this.rightCamBound);
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.mainCamera.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( targetRotation.x, targetRotation.y, targetRotation.z );
                }

            },
            /*ControllerOnPointer.OnDrag end.*/

            /*ControllerOnPointer.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "ControllerOnPointer#OnPointerUp", this ); }

                if (!Singleton$1(GlobalInstance).Instance.gameManagerInstance.isShootLastBullet && !Singleton$1(GlobalInstance).Instance.gameManagerInstance.isSetToEnd) {
                    if (this.isInteractive) {
                        DG.Tweening.ShortcutExtensions.DOKill(this.sniperGun.gameObject.transform);
                        this.UnScoped();
                    }
                }
            },
            /*ControllerOnPointer.OnPointerUp end.*/

            /*ControllerOnPointer.OnScoped start.*/
            OnScoped: function () {
if ( TRACE ) { TRACE( "ControllerOnPointer#OnScoped", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.sniperGun.gameObject.transform, this.gunMovingPos.$clone(), 0.2), DG.Tweening.Ease.OutQuart), Bridge.fn.bind(this, function () {
                    this.sniperGun.gameObject.SetActive(false);
                    this.scopeOverlay.gameObject.SetActive(true);
                    DG.Tweening.ShortcutExtensions.DOFieldOfView(Singleton$1(GlobalInstance).Instance.gameManagerInstance.mainCamera, this.FOVscoped, 0.1);
                    DG.Tweening.ShortcutExtensions.DOKill(this.sniperGun.gameObject.transform);
                }));
            },
            /*ControllerOnPointer.OnScoped end.*/

            /*ControllerOnPointer.UnScoped start.*/
            UnScoped: function () {
if ( TRACE ) { TRACE( "ControllerOnPointer#UnScoped", this ); }

                DG.Tweening.ShortcutExtensions.DOFieldOfView(Singleton$1(GlobalInstance).Instance.gameManagerInstance.mainCamera, this.FOVcache, 0.1);
                this.sniperGun.gameObject.SetActive(true);
                this.sniperGun.transform.localPosition = new pc.Vec3( 1, -2.5, 1.4 );
                this.scopeOverlay.gameObject.SetActive(false);
                if (this.isCanShoot) {
                    this.sniperGun.ExploreFx();
                    this.isInteractive = false;
                    this.isCanShoot = false;
                    this.Shooting();
                    this.StartCoroutine$1(HelperUtility.StartAction$1(Bridge.fn.bind(this, function () {
                        this.sniperGun.Preparing();
                    }), 0.25));
                }
            },
            /*ControllerOnPointer.UnScoped end.*/

            /*ControllerOnPointer.Shooting start.*/
            Shooting: function () {
if ( TRACE ) { TRACE( "ControllerOnPointer#Shooting", this ); }

                this.isShooting = true;
                this.sniperGun.FireBullet();
            },
            /*ControllerOnPointer.Shooting end.*/


        }
    });
    /*ControllerOnPointer end.*/

    /*CutOutMaskUI start.*/
    Bridge.define("CutOutMaskUI", {
        inherits: [UnityEngine.UI.Image],
        props: {
            materialForRendering: {
                get: function () {
if ( TRACE ) { TRACE( "CutOutMaskUI#materialForRendering#get", this ); }

                    var material = new UnityEngine.Material.$ctor1(Bridge.ensureBaseProperty(this, "materialForRendering").$UnityEngine$UI$Graphic$materialForRendering);
                    material.SetInt$1("_StencilComp", UnityEngine.Rendering.CompareFunction.NotEqual);
                    return material;
                }
            }
        }
    });
    /*CutOutMaskUI end.*/

    /*DefineHelper start.*/
    Bridge.define("DefineHelper", {
        statics: {
            fields: {
                Move: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DefineHelper#init", this ); }

                    this.Move = "Move";
                }
            }
        }
    });
    /*DefineHelper end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: "nested class",
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Gradient}          gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       strength      The shake strength
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {UnityEngine.Vector2}          strength      The shake strength on each axis
                 * @param   {number}                       vibrato       Indicates how much will the shake vibrate
                 * @param   {number}                       randomness    Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                      fadeOut       If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position.$clone());
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {UnityEngine.Gradient}    gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color.$clone());
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x.$clone());
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: "nested class",
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return false;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/
    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {System.Object}    arg
     * @return  {void}
     */


    /*EventDispatcher start.*/
    Bridge.define("EventDispatcher", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                s_instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "EventDispatcher#Instance#get", this ); }

                        // instance not exist, then create new one
                        if (UnityEngine.MonoBehaviour.op_Equality(EventDispatcher.s_instance, null)) {
                            // create new Gameobject, and add EventDispatcher component
                            var singletonObject = new UnityEngine.GameObject.ctor();
                            EventDispatcher.s_instance = singletonObject.AddComponent(EventDispatcher);
                            singletonObject.name = "Singleton - EventDispatcher";
                            //Commons.Log("Create singleton : {0}", singletonObject.name);
                        }
                        return EventDispatcher.s_instance;
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "EventDispatcher#Instance#set", this ); }
 }
                }
            },
            methods: {
                /*EventDispatcher.HasInstance:static start.*/
                HasInstance: function () {
if ( TRACE ) { TRACE( "EventDispatcher#HasInstance", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(EventDispatcher.s_instance, null);
                },
                /*EventDispatcher.HasInstance:static end.*/


            }
        },
        fields: {
            /**
             * @instance
             * @private
             * @memberof EventDispatcher
             * @type System.Collections.Generic.Dictionary$2
             */
            _listeners: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EventDispatcher#init", this ); }

                this._listeners = new (System.Collections.Generic.Dictionary$2(EventID,Function)).ctor();
            }
        },
        methods: {
            /*EventDispatcher.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "EventDispatcher#Awake", this ); }

                // check if there's another instance already exist in scene
                if (UnityEngine.MonoBehaviour.op_Inequality(EventDispatcher.s_instance, null) && EventDispatcher.s_instance.GetInstanceID() !== this.GetInstanceID()) {
                    // Destroy this instances because already exist the singleton of EventsDispatcer
                    //Commons.Log("An instance of EventDispatcher already exist : <{1}>, So destroy this instance : <{2}>!!", s_instance.name, name);
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                } else {
                    // set instance
                    EventDispatcher.s_instance = this;
                }

                //DontDestroyOnLoad(this);
            },
            /*EventDispatcher.Awake end.*/

            /*EventDispatcher.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "EventDispatcher#OnDestroy", this ); }

                // reset this static var to null if it's the singleton instance
                if (UnityEngine.MonoBehaviour.op_Equality(EventDispatcher.s_instance, this)) {
                    this.ClearAllListener();
                    EventDispatcher.s_instance = null;
                }
            },
            /*EventDispatcher.OnDestroy end.*/

            /*EventDispatcher.RegisterListener start.*/
            /**
             * Register to listen for eventID
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID     
             * @param   {System.Action}    callback
             * @return  {void}
             */
            RegisterListener: function (eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RegisterListener", this ); }

                // checking params
                //Commons.Assert(callback != null, "AddListener, event {0}, callback = null !!", eventID.ToString());
                //Commons.Assert(eventID != EventID.None, "RegisterListener, event = None !!");

                // check if listener exist in distionary
                if (this._listeners.containsKey(eventID)) {
                    // add callback to our collection
                    this._listeners.setItem(eventID, Bridge.fn.combine(this._listeners.getItem(eventID), callback));
                } else {
                    // add new key-value pair
                    this._listeners.add(eventID, null);
                    this._listeners.setItem(eventID, Bridge.fn.combine(this._listeners.getItem(eventID), callback));
                }
            },
            /*EventDispatcher.RegisterListener end.*/

            /*EventDispatcher.PostEvent start.*/
            /**
             * Posts the event. This will notify all listener that register for this event
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID    
             * @param   {System.Object}    param
             * @return  {void}
             */
            PostEvent: function (eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcher#PostEvent", this ); }

                if (param === void 0) { param = null; }
                if (!this._listeners.containsKey(eventID)) {
                    //Commons.Log("No listeners for this event : {0}", eventID);
                    return;
                }

                // posting event
                var callbacks = this._listeners.getItem(eventID);
                // if there's no listener remain, then do nothing
                if (!Bridge.staticEquals(callbacks, null)) {
                    callbacks(param);
                } else {
                    //Commons.Log("PostEvent {0}, but no listener remain, Remove this key", eventID);
                    this._listeners.remove(eventID);
                }
            },
            /*EventDispatcher.PostEvent end.*/

            /*EventDispatcher.RemoveListener start.*/
            /**
             * Removes the listener. Use to Unregister listener
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @param   {EventID}          eventID     
             * @param   {System.Action}    callback
             * @return  {void}
             */
            RemoveListener: function (eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcher#RemoveListener", this ); }

                // checking params
                //Commons.Assert(callback != null, "RemoveListener, event {0}, callback = null !!", eventID.ToString());
                //Commons.Assert(eventID != EventID.None, "AddListener, event = None !!");

                if (this._listeners.containsKey(eventID)) {
                    this._listeners.setItem(eventID, Bridge.fn.remove(this._listeners.getItem(eventID), callback));
                } else {
                    //Commons.Warning(false, "RemoveListener, not found key : " + eventID);
                }
            },
            /*EventDispatcher.RemoveListener end.*/

            /*EventDispatcher.ClearAllListener start.*/
            /**
             * Clears all the listener.
             *
             * @instance
             * @public
             * @this EventDispatcher
             * @memberof EventDispatcher
             * @return  {void}
             */
            ClearAllListener: function () {
if ( TRACE ) { TRACE( "EventDispatcher#ClearAllListener", this ); }

                this._listeners.clear();
            },
            /*EventDispatcher.ClearAllListener end.*/


        }
    });
    /*EventDispatcher end.*/

    /*EventDispatcherExtension start.*/
    /**
     * Delare some "shortcut" for using EventDispatcher easier
     *
     * @static
     * @abstract
     * @public
     * @class EventDispatcherExtension
     */
    Bridge.define("EventDispatcherExtension", {
        statics: {
            methods: {
                /*EventDispatcherExtension.RegisterListener:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    listener    
                 * @param   {EventID}                      eventID     
                 * @param   {System.Action}                callback
                 * @return  {void}
                 */
                RegisterListener: function (listener, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#RegisterListener", this ); }

                    EventDispatcher.Instance.RegisterListener(eventID, callback);
                },
                /*EventDispatcherExtension.RegisterListener:static end.*/

                /*EventDispatcherExtension.PostEvent$1:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    listener    
                 * @param   {EventID}                      eventID     
                 * @param   {System.Object}                param
                 * @return  {void}
                 */
                PostEvent$1: function (listener, eventID, param) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent$1", this ); }

                    EventDispatcher.Instance.PostEvent(eventID, param);
                },
                /*EventDispatcherExtension.PostEvent$1:static end.*/

                /*EventDispatcherExtension.PostEvent:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    sender     
                 * @param   {EventID}                      eventID
                 * @return  {void}
                 */
                PostEvent: function (sender, eventID) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#PostEvent", this ); }

                    EventDispatcher.Instance.PostEvent(eventID, null);
                },
                /*EventDispatcherExtension.PostEvent:static end.*/

                /*EventDispatcherExtension.RemoveListener:static start.*/
                /**
                 * @static
                 * @public
                 * @this EventDispatcherExtension
                 * @memberof EventDispatcherExtension
                 * @param   {UnityEngine.MonoBehaviour}    sender      
                 * @param   {EventID}                      eventID     
                 * @param   {System.Action}                callback
                 * @return  {void}
                 */
                RemoveListener: function (sender, eventID, callback) {
if ( TRACE ) { TRACE( "EventDispatcherExtension#RemoveListener", this ); }

                    EventDispatcher.Instance.RemoveListener(eventID, callback);
                },
                /*EventDispatcherExtension.RemoveListener:static end.*/


            }
        }
    });
    /*EventDispatcherExtension end.*/

    /*EventID start.*/
    Bridge.define("EventID", {
        $kind: "enum",
        statics: {
            fields: {
                FailedGame: 0,
                WinGame: 1,
                FirstTouch: 2
            }
        }
    });
    /*EventID end.*/

    /*SingletonMono$1 start.*/
    Bridge.define("SingletonMono$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: Bridge.getDefaultValue(T)
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SingletonMono$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        },
        methods: {
            /*SingletonMono$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SingletonMono$1#Awake", this ); }

                if (Bridge.rValue(SingletonMono$1(T).instance) == null) {
                    SingletonMono$1(T).instance = Bridge.as(this, T);
                } else {
                    if (UnityEngine.Component.op_Inequality(this, Bridge.rValue(SingletonMono$1(T).instance))) {
                        UnityEngine.Debug.LogWarningFormat("[Singleton] Another instance of" + (Bridge.Reflection.getTypeFullName(T) || "") + "is already exist ");
                        UnityEngine.Object.DestroyImmediate(this.gameObject);
                        return;
                    }
                }
            },
            /*SingletonMono$1.Awake end.*/


        }
    }; });
    /*SingletonMono$1 end.*/
    /**
     * @memberof System
     * @callback System.Func
     * @return  {boolean}
     */

    /** @namespace UnityEngine.Events */

    /**
     * @memberof UnityEngine.Events
     * @callback UnityEngine.Events.UnityAction
     * @return  {void}
     */

    /**
     * @callback HelperUtility.Compare
     * @param   {System.Object}    a1    
     * @param   {System.Object}    a2
     * @return  {number}
     */


    /*HelperUtility start.*/
    Bridge.define("HelperUtility", {
        statics: {
            methods: {
                /*HelperUtility.DecimalRounding:static start.*/
                /**
                 * Bỏ các số sau dấu phẩy của số thập
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}    Num      
                 * @param   {number}    Round    Số chữ số sau dấu phẩy
                 * @return  {number}
                 */
                DecimalRounding: function (Num, Round) {
if ( TRACE ) { TRACE( "HelperUtility#DecimalRounding", this ); }

                    Num = (Bridge.Int.clip32(Math.pow(10, Round) * Num)) / Math.pow(10, Round);
                    return Num;
                },
                /*HelperUtility.DecimalRounding:static end.*/

                /*HelperUtility.DisruptiveArrayObject:static start.*/
                DisruptiveArrayObject: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveArrayObject", this ); }

                    for (var i = 0; i < array.length; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.length);
                        var r2 = UnityEngine.Random.Range(0, array.length);

                        var temp = Bridge.rValue(array[r1]);
                        array[r1] = Bridge.rValue(array[r2]);
                        array[r2] = Bridge.rValue(temp);
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveArrayObject:static end.*/

                /*HelperUtility.DisruptiveListObject$1:static start.*/
                DisruptiveListObject$1: function (array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListObject$1", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = array.getItem(r1);
                        array.setItem(r1, array.getItem(r2));
                        array.setItem(r2, temp);
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListObject$1:static end.*/

                /*HelperUtility.DisruptiveListObject:static start.*/
                DisruptiveListObject: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListObject", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListObject:static end.*/

                /*HelperUtility.DisruptiveList:static start.*/
                DisruptiveList: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveList", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveList:static end.*/

                /*HelperUtility.DisruptiveListSelf:static start.*/
                DisruptiveListSelf: function (T, array) {
if ( TRACE ) { TRACE( "HelperUtility#DisruptiveListSelf", this ); }

                    for (var i = 0; i < array.Count; i = (i + 1) | 0) {
                        //int r1 = System.Random.Next
                        var r1 = UnityEngine.Random.Range(0, array.Count);
                        var r2 = UnityEngine.Random.Range(0, array.Count);

                        var temp = Bridge.rValue(array.getItem(r1));
                        array.setItem(r1, Bridge.rValue(array.getItem(r2)));
                        array.setItem(r2, Bridge.rValue(temp));
                    }

                    return array;
                },
                /*HelperUtility.DisruptiveListSelf:static end.*/

                /*HelperUtility.SelectionSortList:static start.*/
                /**
                 * Sắp xếp giảm dần
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {System.Collections.Generic.List$1}    A                     
                 * @param   {HelperUtility.Compare}                compareElementList
                 * @return  {System.Collections.Generic.List$1}
                 */
                SelectionSortList: function (A, compareElementList) {
if ( TRACE ) { TRACE( "HelperUtility#SelectionSortList", this ); }

                    var i, j, min_idx;
                    var n = A.Count;

                    for (i = 0; i < ((n - 1) | 0); i = (i + 1) | 0) {
                        // Tìm phần tử nhỏ nhất trong mảng
                        min_idx = i;
                        for (j = (i + 1) | 0; j < n; j = (j + 1) | 0) {
                            if (compareElementList(A.getItem(j), A.getItem(min_idx)) < 0) {
                                min_idx = j;
                            }
                        }

                        // Đổi chỗ phần tử nhỏ nhất trong mảng
                        var temp = A.getItem(min_idx);
                        A.setItem(min_idx, A.getItem(i));
                        A.setItem(i, temp);
                    }

                    return A;
                },
                /*HelperUtility.SelectionSortList:static end.*/

                /*HelperUtility.StartThread:static start.*/
                /**
                 * Gọi một Hàm chạy liên tục
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action           
                 * @param   {System.Func}                       conditionStop    
                 * @param   {UnityEngine.Events.UnityAction}    actionStop       
                 * @param   {number}                            time
                 * @return  {System.Collections.IEnumerator}
                 */
                StartThread: function (action, conditionStop, actionStop, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartThread", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (actionStop === void 0) { actionStop = null; }
                                            if (time === void 0) { time = 0.01; }
                                            isStop = false;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(time);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        // Debug.Log("conditionStop " + conditionStop());
                                            if (conditionStop() === true) {
                                                isStop = true;
                                                if (!Bridge.staticEquals(actionStop, null)) {
                                                    actionStop();
                                                }
                                            } else {
                                                action();
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartThread:static end.*/

                /*HelperUtility.StartThread$1:static start.*/
                /**
                 * Gọi một Hàm chạy liên tục
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action        
                 * @param   {number}                            timeToStop    
                 * @param   {UnityEngine.Events.UnityAction}    actionStop
                 * @return  {System.Collections.IEnumerator}
                 */
                StartThread$1: function (action, timeToStop, actionStop) {
if ( TRACE ) { TRACE( "HelperUtility#StartThread$1", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        timer,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (actionStop === void 0) { actionStop = null; }
                                            isStop = false;

                                            timer = 0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.02);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        timer += 0.02;
                                            //Debug.Log(timer);
                                            if (timer >= timeToStop - 1) {
                                                isStop = true;
                                                if (!Bridge.staticEquals(actionStop, null)) {
                                                    actionStop();
                                                }
                                            } else {
                                                action();
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartThread$1:static end.*/

                /*HelperUtility.StartAction$1:static start.*/
                /**
                 * Tạo một hàm chạy sau một khoảng thời gian
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action    
                 * @param   {number}                            time
                 * @return  {System.Collections.IEnumerator}
                 */
                StartAction$1: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartAction$1", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSeconds(time);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartAction$1:static end.*/

                /*HelperUtility.StartAction:static start.*/
                /**
                 * Tạo một hàm chạy khi một điều kiện thỏa mãn
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Events.UnityAction}    action       
                 * @param   {System.Func}                       condition
                 * @return  {System.Collections.IEnumerator}
                 */
                StartAction: function (action, condition) {
if ( TRACE ) { TRACE( "HelperUtility#StartAction", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitUntil(condition);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartAction:static end.*/

                /*HelperUtility.StartActionRealTime:static start.*/
                StartActionRealTime: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartActionRealTime", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(time);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        action();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.StartActionRealTime:static end.*/

                /*HelperUtility.StartActionNotUseCorutines:static start.*/
                StartActionNotUseCorutines: function (action, time) {
if ( TRACE ) { TRACE( "HelperUtility#StartActionNotUseCorutines", this ); }

                    // Observable.Timer(TimeSpan.FromSeconds(time)).Subscribe(l => { action(); });
                },
                /*HelperUtility.StartActionNotUseCorutines:static end.*/

                /*HelperUtility.GetPointDistanceFromObject:static start.*/
                /**
                 * Lấy một điểm cách 1 điểm cho trước và theo 1 hướng
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}                 distance     
                 * @param   {UnityEngine.Vector3}    direction    
                 * @param   {UnityEngine.Vector3}    fromPoint
                 * @return  {UnityEngine.Vector3}
                 */
                GetPointDistanceFromObject: function (distance, direction, fromPoint) {
if ( TRACE ) { TRACE( "HelperUtility#GetPointDistanceFromObject", this ); }

                    distance -= 1;
                    //if (distance < 0)
                    //    distance = 0;

                    var finalDirection = direction.$clone().add( direction.clone().normalize().$clone().clone().scale( distance ) );
                    var targetPosition = fromPoint.$clone().add( finalDirection );

                    return targetPosition.$clone();
                },
                /*HelperUtility.GetPointDistanceFromObject:static end.*/

                /*HelperUtility.GetDirectionFromAngle:static start.*/
                /**
                 * Lấy ra một Vector hợp với VectorP một góc angle. Điểm đầu của Vector là PositionStart
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Vector3}    vectorP          
                 * @param   {number}                 angle            
                 * @param   {UnityEngine.Vector3}    positionStart
                 * @return  {UnityEngine.Vector3}
                 */
                GetDirectionFromAngle: function (vectorP, angle, positionStart) {
if ( TRACE ) { TRACE( "HelperUtility#GetDirectionFromAngle", this ); }

                    if (angle === 90) {
                        return new pc.Vec3( vectorP.y, -vectorP.x, 0 ).clone().normalize().$clone();
                    } else if (angle === 0) {
                        return vectorP.$clone();
                    } else if (angle === 180) {
                        return vectorP.$clone().scale( -1 );
                    } else if (angle === 360) {
                        return new pc.Vec3( -vectorP.y, vectorP.x, 0 ).clone().normalize().$clone();
                    }

                    if (angle > 360) {
                        angle -= 360;
                    }
                    if (angle < 0) {
                        angle *= -1;
                    }

                    var radiaAngle = (angle * UnityEngine.Mathf.PI) / 180;
                    var tanAngle = Math.tan(radiaAngle);
                    var u = new pc.Vec2( vectorP.y, -vectorP.x );

                    var B = HelperUtility.GetPointDistanceFromObject(1, vectorP.$clone(), positionStart.$clone());
                    //Debug.Log("Distance "+ Vector3.Distance(positionStart, B));

                    var result = HelperUtility.GetPointDistanceFromObject(tanAngle, UnityEngine.Vector3.FromVector2(u.$clone()), B.$clone());

                    return (result.$clone().sub( positionStart )).clone().normalize().$clone();
                },
                /*HelperUtility.GetDirectionFromAngle:static end.*/

                /*HelperUtility.GetDirectionFromAngle_2:static start.*/
                /**
                 * Lấy ra một Vector hợp với VectorP một góc angle. Điểm đầu của Vector là PositionStart
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {UnityEngine.Vector3}    vectorP          
                 * @param   {number}                 angle            
                 * @param   {UnityEngine.Vector3}    positionStart
                 * @return  {UnityEngine.Vector3}
                 */
                GetDirectionFromAngle_2: function (vectorP, angle, positionStart) {
if ( TRACE ) { TRACE( "HelperUtility#GetDirectionFromAngle_2", this ); }

                    if (angle === 90) {
                        return new pc.Vec3( vectorP.y, -vectorP.x, 0 ).clone().normalize().$clone();
                    } else if (angle === 0) {
                        return vectorP.$clone();
                    } else if (angle === 180) {
                        return vectorP.$clone().scale( -1 );
                    } else if (angle === 360) {
                        return new pc.Vec3( -vectorP.y, vectorP.x, 0 ).clone().normalize().$clone();
                    }

                    if (angle > 360) {
                        angle -= 360;
                    }
                    if (angle < 0) {
                        angle *= -1;
                    }

                    if (angle > 90 && angle < 270) {
                        vectorP = vectorP.$clone().scale( -1 );
                    }

                    var radiaAngle = (angle * UnityEngine.Mathf.PI) / 180;
                    var tanAngle = Math.tan(radiaAngle);
                    var u = new pc.Vec2( vectorP.y, -vectorP.x );

                    var B = HelperUtility.GetPointDistanceFromObject(1, vectorP.$clone(), positionStart.$clone());
                    //Debug.Log("Distance "+ Vector3.Distance(positionStart, B));

                    var result = HelperUtility.GetPointDistanceFromObject(tanAngle, UnityEngine.Vector3.FromVector2(u.$clone()), B.$clone());

                    return (result.$clone().sub( positionStart )).clone().normalize().$clone();
                },
                /*HelperUtility.GetDirectionFromAngle_2:static end.*/

                /*HelperUtility.DOLocalRotateQuaternion:static start.*/
                DOLocalRotateQuaternion: function (endValue, speedRotate, objLookAt, actionComplete) {
if ( TRACE ) { TRACE( "HelperUtility#DOLocalRotateQuaternion", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        isStop,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        isStop = false;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( isStop === false ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        $enumerator.current = new UnityEngine.WaitForSecondsRealtime(UnityEngine.Time.deltaTime);
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        //Debug.Log(objLookAt.name + " "   + Quaternion.Angle(objLookAt.transform.localRotation, endValue));
                                            if (pc.Quat.angle( objLookAt.transform.localRotation.$clone(), endValue.$clone() ) <= 8.0) {
                                                isStop = true;
                                                $step = 4;
                                                continue;
                                            } else {
                                                objLookAt.transform.localRotation = new pc.Quat().slerp( objLookAt.transform.localRotation, endValue, UnityEngine.Time.deltaTime * speedRotate );
                                            }

                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        actionComplete();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*HelperUtility.DOLocalRotateQuaternion:static end.*/

                /*HelperUtility.GetRotateDirection:static start.*/
                GetRotateDirection: function (from, to) {
if ( TRACE ) { TRACE( "HelperUtility#GetRotateDirection", this ); }

                    var fromY = from.getPositiveEulerAngles().y;
                    var toY = to.getPositiveEulerAngles().y;
                    var clockWise = 0.0;
                    var counterClockWise = 0.0;

                    if (fromY <= toY) {
                        clockWise = toY - fromY;
                        counterClockWise = fromY + (360 - toY);
                    } else {
                        clockWise = (360 - fromY) + toY;
                        counterClockWise = fromY - toY;
                    }
                    return (clockWise <= counterClockWise);
                },
                /*HelperUtility.GetRotateDirection:static end.*/

                /*HelperUtility.LookAtToDirection:static start.*/
                LookAtToDirection: function (diretion, objLookAt, speedLockAt) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToDirection", this ); }

                    if (speedLockAt === void 0) { speedLockAt = 500.0; }
                    var xTarget = diretion.x;
                    var yTarget = diretion.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90;

                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );



                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedLockAt );
                },
                /*HelperUtility.LookAtToDirection:static end.*/

                /*HelperUtility.LookAtToDirectionAngleDetal:static start.*/
                LookAtToDirectionAngleDetal: function (diretion, objLookAt, AngleDetal, speedLockAt) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToDirectionAngleDetal", this ); }

                    if (speedLockAt === void 0) { speedLockAt = 500.0; }
                    var xTarget = diretion.x;
                    var yTarget = diretion.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90 + AngleDetal;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedLockAt );
                },
                /*HelperUtility.LookAtToDirectionAngleDetal:static end.*/

                /*HelperUtility.LookAtToPosition:static start.*/
                LookAtToPosition: function (position, objLookAt, speedRotate) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToPosition", this ); }

                    if (speedRotate === void 0) { speedRotate = 500.0; }
                    var xTarget = position.x - objLookAt.transform.position.x;
                    var yTarget = position.z - objLookAt.transform.position.z;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedRotate );
                },
                /*HelperUtility.LookAtToPosition:static end.*/

                /*HelperUtility.LookAtToPositionAngleDetal:static start.*/
                LookAtToPositionAngleDetal: function (position, objLookAt, AngleDetal, speedRotate) {
if ( TRACE ) { TRACE( "HelperUtility#LookAtToPositionAngleDetal", this ); }

                    if (speedRotate === void 0) { speedRotate = 500.0; }
                    var xTarget = position.x - objLookAt.transform.position.x;
                    var yTarget = position.y - objLookAt.transform.position.y;
                    var angle = Math.atan2(yTarget, xTarget) * UnityEngine.Mathf.Rad2Deg + 90 + AngleDetal;
                    var q = new pc.Quat().setFromAxisAngle( new pc.Vec3( 0, 0, 1 ), angle );
                    objLookAt.transform.rotation = new pc.Quat().slerp( objLookAt.transform.rotation, q, UnityEngine.Time.deltaTime * speedRotate );
                },
                /*HelperUtility.LookAtToPositionAngleDetal:static end.*/

                /*HelperUtility.RandomCustom:static start.*/
                RandomCustom: function (first, last, diff) {
if ( TRACE ) { TRACE( "HelperUtility#RandomCustom", this ); }

                    var r = -1;
                    while (r < 0) {
                        r = UnityEngine.Random.Range(first, last);
                        for (var i = 0; i < diff.Count; i = (i + 1) | 0) {
                            if (r === diff.getItem(i)) {
                                r = -1;
                                break;
                            }
                        }
                    }
                    return r;
                },
                /*HelperUtility.RandomCustom:static end.*/

                /*HelperUtility.RandomUnduplicated$1:static start.*/
                /**
                 * Random một phần tử trong 1 mảng không trùng lặp với 1 phần tử cho trước
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {number}                               oldValue    Giá trị mẫu không được trùng lặp
                 * @param   {System.Collections.Generic.List$1}    diff        List giá trị
                 * @return  {number}
                 */
                RandomUnduplicated$1: function (oldValue, diff) {
if ( TRACE ) { TRACE( "HelperUtility#RandomUnduplicated$1", this ); }

                    var m_diff = new (System.Collections.Generic.List$1(System.Int32)).$ctor1(diff);

                    //Trộn List
                    m_diff = HelperUtility.DisruptiveListObject(System.Int32, m_diff);

                    for (var i = 0; i < m_diff.Count; i = (i + 1) | 0) {
                        if (oldValue !== m_diff.getItem(i)) {
                            return m_diff.getItem(i);
                        }
                    }

                    return oldValue;
                },
                /*HelperUtility.RandomUnduplicated$1:static end.*/

                /*HelperUtility.RandomUnduplicated:static start.*/
                /**
                 * Random một phần tử trong 1 mảng không trùng lặp với 1 phần tử cho trước
                 *
                 * @static
                 * @public
                 * @this HelperUtility
                 * @memberof HelperUtility
                 * @param   {System.Collections.Generic.List$1}    diff         List giá trị
                 * @param   {Array.<number>}                       oldValues    Giá trị mẫu không được trùng lặp
                 * @return  {number}
                 */
                RandomUnduplicated: function (diff, oldValues) {
if ( TRACE ) { TRACE( "HelperUtility#RandomUnduplicated", this ); }

                    if (oldValues === void 0) { oldValues = []; }
                    var m_diff = new (System.Collections.Generic.List$1(System.Int32)).$ctor1(diff);

                    //Trộn List
                    m_diff = HelperUtility.DisruptiveListObject(System.Int32, m_diff);

                    for (var i = 0; i < m_diff.Count; i = (i + 1) | 0) {
                        var isHasSame = false;
                        for (var j = 0; j < oldValues.length; j = (j + 1) | 0) {
                            if (oldValues[j] === m_diff.getItem(i)) {
                                isHasSame = true;
                                break;
                            }
                        }

                        if (!isHasSame) {
                            return m_diff.getItem(i);
                        }
                    }

                    return 0;
                },
                /*HelperUtility.RandomUnduplicated:static end.*/

                /*HelperUtility.SetPos:static start.*/
                SetPos: function (numCount, MaxERow) {
if ( TRACE ) { TRACE( "HelperUtility#SetPos", this ); }

                    var result = new (System.Collections.Generic.List$1(System.Int32)).ctor();


                    if (numCount === 1) {
                        return function (_o1) {
                                _o1.add(1);
                                return _o1;
                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                    } else {
                        if (numCount === 2) {
                            return function (_o2) {
                                    _o2.add(2);
                                    return _o2;
                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                        } else {
                            if (numCount === 3) {
                                return function (_o3) {
                                        _o3.add(1);
                                        _o3.add(2);
                                        return _o3;
                                    }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                            } else {
                                if (numCount === 4) {
                                    return function (_o4) {
                                            _o4.add(2);
                                            _o4.add(2);
                                            return _o4;
                                        }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                } else {
                                    if (numCount === 5) {
                                        return function (_o5) {
                                                _o5.add(1);
                                                _o5.add(2);
                                                _o5.add(2);
                                                return _o5;
                                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                    } else {
                                        if (numCount === 6) {
                                            return function (_o6) {
                                                    _o6.add(1);
                                                    _o6.add(2);
                                                    _o6.add(2);
                                                    _o6.add(1);
                                                    return _o6;
                                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                        } else {
                                            if (numCount === 7) {
                                                return function (_o7) {
                                                        _o7.add(1);
                                                        _o7.add(2);
                                                        _o7.add(2);
                                                        _o7.add(2);
                                                        return _o7;
                                                    }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                            } else {
                                                if (numCount === 8) {
                                                    return function (_o8) {
                                                            _o8.add(1);
                                                            _o8.add(2);
                                                            _o8.add(3);
                                                            _o8.add(2);
                                                            return _o8;
                                                        }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                } else {
                                                    if (numCount === 9) {
                                                        return function (_o9) {
                                                                _o9.add(1);
                                                                _o9.add(2);
                                                                _o9.add(3);
                                                                _o9.add(3);
                                                                return _o9;
                                                            }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                    } else {
                                                        if (numCount === 10) {
                                                            return function (_o10) {
                                                                    _o10.add(2);
                                                                    _o10.add(3);
                                                                    _o10.add(3);
                                                                    _o10.add(2);
                                                                    return _o10;
                                                                }(new (System.Collections.Generic.List$1(System.Int32)).ctor());
                                                        } else {
                                                            var numCount_1 = (Bridge.Int.div(numCount, 2)) | 0;
                                                            var lst_1 = HelperUtility.PosHandle(numCount_1, MaxERow);
                                                            result.AddRange(lst_1);

                                                            var numCount_2 = (numCount - numCount_1) | 0;
                                                            var lst_2 = HelperUtility.PosHandle(numCount_2, MaxERow);
                                                            lst_2.Reverse();

                                                            result.AddRange(lst_2);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    return result;
                },
                /*HelperUtility.SetPos:static end.*/

                /*HelperUtility.PosHandle:static start.*/
                PosHandle: function (numCount, MaxERow) {
if ( TRACE ) { TRACE( "HelperUtility#PosHandle", this ); }

                    var minCountInRow = 5;

                    var result = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                    var hs = minCountInRow;

                    var index = 0;
                    while (numCount > 0) {
                        if (numCount >= hs && hs >= MaxERow) {
                            result.add(hs);
                        }

                        if (numCount < hs) {
                            if (numCount < result.getItem(((index - 1) | 0))) {
                                if (numCount <= minCountInRow) {
                                    result.insert(0, numCount);
                                    break;
                                } else {
                                    while (numCount > 0) {
                                        for (var i = 0; i < result.Count; i = (i + 1) | 0) {
                                            if (i === 0) {
                                                result.insert(0, minCountInRow);
                                                numCount = (numCount - minCountInRow) | 0;
                                                if (numCount <= 0) {
                                                    break;
                                                }
                                            } else {
                                                var value = result.getItem(i);
                                                value = (value + 1) | 0;
                                                if (value > MaxERow) {
                                                    break;
                                                }

                                                result.setItem(i, (result.getItem(i) + 1) | 0);

                                                numCount = (numCount - 1) | 0;
                                                if (numCount <= 0) {
                                                    break;
                                                }
                                            }



                                        }
                                    }
                                }
                            } else {
                                result.add(numCount);
                            }
                            break;
                        }

                        numCount = (numCount - hs) | 0;

                        result.add(hs);
                        hs = (hs + 1) | 0;
                        if (hs >= MaxERow) {
                            hs = MaxERow;
                        }
                        index = (index + 1) | 0;
                    }

                    return result;
                },
                /*HelperUtility.PosHandle:static end.*/


            }
        }
    });
    /*HelperUtility end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MMMaths start.*/
    Bridge.define("MMMaths", {
        statics: {
            methods: {
                /*MMMaths.Vector3ToVector2:static start.*/
                /**
                 * Takes a Vector3 and turns it into a Vector2
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    target    The Vector3 to turn into a Vector2.
                 * @return  {UnityEngine.Vector2}              The vector2.
                 */
                Vector3ToVector2: function (target) {
if ( TRACE ) { TRACE( "MMMaths#Vector3ToVector2", this ); }

                    return new pc.Vec2( target.x, target.y );
                },
                /*MMMaths.Vector3ToVector2:static end.*/

                /*MMMaths.Vector2ToVector3:static start.*/
                /**
                 * Takes a Vector2 and turns it into a Vector3 with a null z value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector2}    target    The Vector2 to turn into a Vector3.
                 * @return  {UnityEngine.Vector3}              The vector3.
                 */
                Vector2ToVector3: function (target) {
if ( TRACE ) { TRACE( "MMMaths#Vector2ToVector3", this ); }

                    return new pc.Vec3( target.x, target.y, 0 );
                },
                /*MMMaths.Vector2ToVector3:static end.*/

                /*MMMaths.Vector2ToVector3$1:static start.*/
                /**
                 * Takes a Vector2 and turns it into a Vector3 with the specified z value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector2}    target       The Vector2 to turn into a Vector3.
                 * @param   {number}                 newZValue    New Z value.
                 * @return  {UnityEngine.Vector3}                 The vector3.
                 */
                Vector2ToVector3$1: function (target, newZValue) {
if ( TRACE ) { TRACE( "MMMaths#Vector2ToVector3$1", this ); }

                    return new pc.Vec3( target.x, target.y, newZValue );
                },
                /*MMMaths.Vector2ToVector3$1:static end.*/

                /*MMMaths.RandomVector3:static start.*/
                /**
                 * Returns a random vector3 from 2 defined vector3.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    minimum    
                 * @param   {UnityEngine.Vector3}    maximum
                 * @return  {UnityEngine.Vector3}               The vector3.
                 */
                RandomVector3: function (minimum, maximum) {
if ( TRACE ) { TRACE( "MMMaths#RandomVector3", this ); }

                    return new pc.Vec3( UnityEngine.Random.Range$1(minimum.x, maximum.x), UnityEngine.Random.Range$1(minimum.y, maximum.y), UnityEngine.Random.Range$1(minimum.z, maximum.z) );
                },
                /*MMMaths.RandomVector3:static end.*/

                /*MMMaths.RotatePointAroundPivot:static start.*/
                /**
                 * Rotates a point around the given pivot.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    point    The point to rotate.
                 * @param   {UnityEngine.Vector3}    pivot    The pivot's position.
                 * @param   {number}                 angle    The angle we want to rotate our point.
                 * @return  {UnityEngine.Vector3}             The new point position.
                 */
                RotatePointAroundPivot: function (point, pivot, angle) {
if ( TRACE ) { TRACE( "MMMaths#RotatePointAroundPivot", this ); }

                    angle = angle * (0.0174532924);
                    var rotatedX = Math.cos(angle) * (point.x - pivot.x) - Math.sin(angle) * (point.y - pivot.y) + pivot.x;
                    var rotatedY = Math.sin(angle) * (point.x - pivot.x) + Math.cos(angle) * (point.y - pivot.y) + pivot.y;
                    return new pc.Vec3( rotatedX, rotatedY, 0 );
                },
                /*MMMaths.RotatePointAroundPivot:static end.*/

                /*MMMaths.RotatePointAroundPivot$1:static start.*/
                /**
                 * Rotates a point around the given pivot.
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {UnityEngine.Vector3}    point    The point to rotate.
                 * @param   {UnityEngine.Vector3}    pivot    The pivot's position.
                 * @param   {UnityEngine.Vector3}    angle
                 * @return  {UnityEngine.Vector3}             The new point position.
                 */
                RotatePointAroundPivot$1: function (point, pivot, angle) {
if ( TRACE ) { TRACE( "MMMaths#RotatePointAroundPivot$1", this ); }

                    // we get point direction from the point to the pivot
                    var direction = point.$clone().sub( pivot );
                    // we rotate the direction
                    direction = new pc.Quat().setFromEulerAngles_Unity( angle.x, angle.y, angle.z ).transformVector( direction );
                    // we determine the rotated point's position
                    point = direction.$clone().add( pivot );
                    return point.$clone();
                },
                /*MMMaths.RotatePointAroundPivot$1:static end.*/

                /*MMMaths.Sum:static start.*/
                /**
                 * Returns the sum of all the int passed in parameters
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {Array.<number>}    thingsToAdd    Things to add.
                 * @return  {number}
                 */
                Sum: function (thingsToAdd) {
if ( TRACE ) { TRACE( "MMMaths#Sum", this ); }

                    if (thingsToAdd === void 0) { thingsToAdd = []; }
                    var result = 0;
                    for (var i = 0; i < thingsToAdd.length; i = (i + 1) | 0) {
                        result = (result + thingsToAdd[i]) | 0;
                    }
                    return result;
                },
                /*MMMaths.Sum:static end.*/

                /*MMMaths.RollADice:static start.*/
                /**
                 * Returns the result of rolling a dice of the specified number of sides
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}    numberOfSides    Number of sides of the dice.
                 * @return  {number}                     The result of the dice roll.
                 */
                RollADice: function (numberOfSides) {
if ( TRACE ) { TRACE( "MMMaths#RollADice", this ); }

                    return (UnityEngine.Random.Range(1, numberOfSides));
                },
                /*MMMaths.RollADice:static end.*/

                /*MMMaths.Chance:static start.*/
                /**
                 * Returns a random success based on X% of chance.
                 Example : I have 20% of chance to do X, Chance(20) &gt; true, yay!
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}     percent    Percent of chance.
                 * @return  {boolean}
                 */
                Chance: function (percent) {
if ( TRACE ) { TRACE( "MMMaths#Chance", this ); }

                    return (UnityEngine.Random.Range(0, 100) <= percent);
                },
                /*MMMaths.Chance:static end.*/

                /*MMMaths.Approach:static start.*/
                /**
                 * Moves from "from" to "to" by the specified amount and returns the corresponding value
                 *
                 * @static
                 * @public
                 * @this MMMaths
                 * @memberof MMMaths
                 * @param   {number}    from      From.
                 * @param   {number}    to        To.
                 * @param   {number}    amount    Amount.
                 * @return  {number}
                 */
                Approach: function (from, to, amount) {
if ( TRACE ) { TRACE( "MMMaths#Approach", this ); }

                    if (from < to) {
                        from += amount;
                        if (from > to) {
                            return to;
                        }
                    } else {
                        from -= amount;
                        if (from < to) {
                            return to;
                        }
                    }
                    return from;
                },
                /*MMMaths.Approach:static end.*/


            }
        }
    });
    /*MMMaths end.*/

    /*NameTag start.*/
    Bridge.define("NameTag", {
        statics: {
            fields: {
                Player: null,
                Enemy: null,
                Building: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "NameTag#init", this ); }

                    this.Player = "Player";
                    this.Enemy = "Enemy";
                    this.Building = "Building";
                }
            }
        }
    });
    /*NameTag end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scopeOverlay: null,
            gunMovingPos: null,
            sniperGun: null,
            isStartClick: false,
            isInteractive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.gunMovingPos = new UnityEngine.Vector3();
                this.isStartClick = false;
            }
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                this.isInteractive = true;
            },
            /*PlayerController.Start end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.isStartClick = true;
                    if (this.isInteractive) {
                        this.isStartClick = false;
                        this.OnScoped();
                    }
                }
                if (UnityEngine.Input.GetMouseButton(0)) {
                    if (this.isStartClick && this.isInteractive) {
                        this.OnScoped();
                    }


                }
                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.isStartClick = false;

                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.OnScoped start.*/
            OnScoped: function () {
if ( TRACE ) { TRACE( "PlayerController#OnScoped", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(this.sniperGun.gameObject.transform, this.gunMovingPos.$clone(), 0.2), DG.Tweening.Ease.OutQuart), Bridge.fn.bind(this, function () {
                    this.sniperGun.gameObject.SetActive(false);
                }));
            },
            /*PlayerController.OnScoped end.*/

            /*PlayerController.UnScoped start.*/
            UnScoped: function () {
if ( TRACE ) { TRACE( "PlayerController#UnScoped", this ); }

                UnityEngine.Debug.Log$1("UnScope");
            },
            /*PlayerController.UnScoped end.*/


        }
    });
    /*PlayerController end.*/

    /*RotateObject start.*/
    Bridge.define("RotateObject", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            duration: 0,
            angle: 0
        },
        methods: {
            /*RotateObject.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RotateObject#Start", this ); }

                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.ShortcutExtensions.DORotate(this.transform, new pc.Vec3( 0, 0, this.angle ), this.duration, DG.Tweening.RotateMode.LocalAxisAdd), -1), DG.Tweening.Ease.Linear);
            },
            /*RotateObject.Start end.*/


        }
    });
    /*RotateObject end.*/

    /*ScopeController start.*/
    Bridge.define("ScopeController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bgFade: null,
            mainScope: null
        },
        methods: {
            /*ScopeController.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ScopeController#OnEnable", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOFade$2(this.bgFade, 1, 0.2), function () {
                    Singleton$1(GlobalInstance).Instance.gameManagerInstance.controllerOnPoint.isCanShoot = true;
                });
                DG.Tweening.DOTweenModuleUI.DOFade$2(this.mainScope, 1, 0.2);
            },
            /*ScopeController.OnEnable end.*/

            /*ScopeController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "ScopeController#OnDisable", this ); }

                DG.Tweening.ShortcutExtensions.DOKill(this.bgFade.gameObject.transform);
                DG.Tweening.ShortcutExtensions.DOKill(this.mainScope.gameObject.transform);
                var tempColor = this.bgFade.color.$clone();
                tempColor.a = 0;
                this.bgFade.color = tempColor.$clone();

                var tempColor2 = this.mainScope.color.$clone();
                tempColor2.a = 0;
                this.mainScope.color = tempColor2.$clone();
            },
            /*ScopeController.OnDisable end.*/


        }
    });
    /*ScopeController end.*/

    /*SelfDefine start.*/
    Bridge.define("SelfDefine", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*SelfDefine end.*/

    /*SimplePool start.*/
    Bridge.define("SimplePool", {
        statics: {
            fields: {
                DEFAULT_POOL_SIZE: 0,
                _pools: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SimplePool#init", this ); }

                    this.DEFAULT_POOL_SIZE = 3;
                }
            },
            methods: {
                /*SimplePool.Init:static start.*/
                /**
                 * Initialize our dictionary.
                 *
                 * @static
                 * @private
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    prefab    
                 * @param   {number}                    qty
                 * @return  {void}
                 */
                Init: function (prefab, qty) {
if ( TRACE ) { TRACE( "SimplePool#Init", this ); }

                    if (prefab === void 0) { prefab = null; }
                    if (qty === void 0) { qty = 3; }
                    if (SimplePool._pools == null) {
                        SimplePool._pools = new (System.Collections.Generic.Dictionary$2(System.Int32,SimplePool.Pool)).ctor();
                    }

                    if (UnityEngine.GameObject.op_Inequality(prefab, null)) {
                        //changed from (prefab, Pool) to (int, Pool) which should be faster if we have 
                        //many different prefabs.
                        var prefabID = prefab.GetInstanceID();
                        if (!SimplePool._pools.containsKey(prefabID)) {
                            SimplePool._pools.setItem(prefabID, new SimplePool.Pool(prefab, qty));
                        }
                    }
                },
                /*SimplePool.Init:static end.*/

                /*SimplePool.PoolPreLoad:static start.*/
                PoolPreLoad: function (prefab, qty, newParent) {
if ( TRACE ) { TRACE( "SimplePool#PoolPreLoad", this ); }

                    if (newParent === void 0) { newParent = null; }
                    SimplePool.Init(prefab, 1);
                    SimplePool._pools.getItem(prefab.GetInstanceID()).Preload(qty, newParent);
                },
                /*SimplePool.PoolPreLoad:static end.*/

                /*SimplePool.Preload:static start.*/
                /**
                 * If you want to preload a few copies of an object at the start
                 of a scene, you can use this. Really not needed unless you're
                 going to go from zero instances to 100+ very quickly.
                 Could technically be optimized more, but in practice the
                 Spawn/Despawn sequence is going to be pretty darn quick and
                 this avoids code duplication.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}            prefab       
                 * @param   {number}                            qty          
                 * @param   {UnityEngine.Transform}             newParent
                 * @return  {Array.<UnityEngine.GameObject>}
                 */
                Preload: function (prefab, qty, newParent) {
if ( TRACE ) { TRACE( "SimplePool#Preload", this ); }

                    if (qty === void 0) { qty = 1; }
                    if (newParent === void 0) { newParent = null; }
                    SimplePool.Init(prefab, qty);
                    // Make an array to grab the objects we're about to pre-spawn.
                    var obs = System.Array.init(qty, null, UnityEngine.GameObject);
                    for (var i = 0; i < qty; i = (i + 1) | 0) {
                        obs[i] = SimplePool.Spawn$3(prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                        if (UnityEngine.Component.op_Inequality(newParent, null)) {
                            obs[i].transform.SetParent(newParent);
                        }
                    }

                    // Now despawn them all.
                    for (var i1 = 0; i1 < qty; i1 = (i1 + 1) | 0) {
                        SimplePool.Despawn(obs[i1]);
                    }
                    return obs;
                },
                /*SimplePool.Preload:static end.*/

                /*SimplePool.Spawn$3:static start.*/
                /**
                 * Spawns a copy of the specified prefab (instantiating one if required).
                 NOTE: Remember that Awake() or Start() will only run on the very first
                 spawn and that member variables won't get reset.  OnEnable will run
                 after spawning -- but remember that toggling IsActive will also
                 call that function.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    prefab    
                 * @param   {UnityEngine.Vector3}       pos       
                 * @param   {UnityEngine.Quaternion}    rot
                 * @return  {UnityEngine.GameObject}
                 */
                Spawn$3: function (prefab, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$3", this ); }

                    SimplePool.Init(prefab);

                    return SimplePool._pools.getItem(prefab.GetInstanceID()).Spawn$1(pos.$clone(), rot.$clone());
                },
                /*SimplePool.Spawn$3:static end.*/

                /*SimplePool.Spawn$2:static start.*/
                Spawn$2: function (prefab) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$2", this ); }

                    return SimplePool.Spawn$3(prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                },
                /*SimplePool.Spawn$2:static end.*/

                /*SimplePool.Spawn:static start.*/
                Spawn: function (T, prefab) {
if ( TRACE ) { TRACE( "SimplePool#Spawn", this ); }

                    return SimplePool.Spawn$1(T, Bridge.rValue(prefab), pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
                },
                /*SimplePool.Spawn:static end.*/

                /*SimplePool.Spawn$1:static start.*/
                Spawn$1: function (T, prefab, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool#Spawn$1", this ); }

                    SimplePool.Init(Bridge.rValue(prefab).gameObject);
                    return SimplePool._pools.getItem(Bridge.rValue(prefab).gameObject.GetInstanceID()).Spawn(T, pos.$clone(), rot.$clone());
                },
                /*SimplePool.Spawn$1:static end.*/

                /*SimplePool.Despawn:static start.*/
                /**
                 * Despawn the specified gameobject back into its pool.
                 *
                 * @static
                 * @public
                 * @this SimplePool
                 * @memberof SimplePool
                 * @param   {UnityEngine.GameObject}    obj
                 * @return  {void}
                 */
                Despawn: function (obj) {
if ( TRACE ) { TRACE( "SimplePool#Despawn", this ); }

                    var $t;
                    var p = null;
                    $t = Bridge.getEnumerator(SimplePool._pools.Values);
                    try {
                        while ($t.moveNext()) {
                            var pool = $t.Current;
                            if (pool.MemberIDs.contains(obj.GetInstanceID())) {
                                p = pool;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (p == null) {
                        UnityEngine.Debug.LogFormat("Object '{0}' wasn't spawned from a pool. Destroying it instead.", [obj.name]);
                        UnityEngine.Object.Destroy(obj);
                    } else {
                        p.Despawn(obj);
                    }
                },
                /*SimplePool.Despawn:static end.*/

                /*SimplePool.GetStackCount:static start.*/
                GetStackCount: function (prefab) {
if ( TRACE ) { TRACE( "SimplePool#GetStackCount", this ); }

                    if (SimplePool._pools == null) {
                        SimplePool._pools = new (System.Collections.Generic.Dictionary$2(System.Int32,SimplePool.Pool)).ctor();
                    }
                    if (UnityEngine.GameObject.op_Equality(prefab, null)) {
                        return 0;
                    }
                    return SimplePool._pools.containsKey(prefab.GetInstanceID()) ? SimplePool._pools.getItem(prefab.GetInstanceID()).StackCount : 0;
                },
                /*SimplePool.GetStackCount:static end.*/

                /*SimplePool.ClearPool:static start.*/
                ClearPool: function () {
if ( TRACE ) { TRACE( "SimplePool#ClearPool", this ); }

                    if (SimplePool._pools != null) {
                        SimplePool._pools.clear();
                    }
                },
                /*SimplePool.ClearPool:static end.*/


            }
        }
    });
    /*SimplePool end.*/

    /*SimplePool+Pool start.*/
    /**
     * The Pool class represents the pool for a particular prefab.
     *
     * @public
     * @class SimplePool.Pool
     */
    Bridge.define("SimplePool.Pool", {
        $kind: "nested class",
        fields: {
            _nextId: 0,
            _inactive: null,
            MemberIDs: null,
            _prefab: null
        },
        props: {
            StackCount: {
                get: function () {
if ( TRACE ) { TRACE( "SimplePool.Pool#StackCount#get", this ); }

                    return this._inactive.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SimplePool.Pool#init", this ); }

                this._nextId = 1;
            },
            ctor: function (prefab, initialQty) {
if ( TRACE ) { TRACE( "SimplePool.Pool#ctor", this ); }

                this.$initialize();
                this._prefab = prefab;
                // If Stack uses a linked list internally, then this
                // whole initialQty thing is a placebo that we could
                // strip out for more minimal code. But it can't *hurt*.
                this._inactive = new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).$ctor2(initialQty);
                this.MemberIDs = new (System.Collections.Generic.HashSet$1(System.Int32)).ctor();
            }
        },
        methods: {
            /*SimplePool+Pool.Preload start.*/
            Preload: function (initialQty, parent) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Preload", this ); }

                if (parent === void 0) { parent = null; }
                for (var i = 0; i < initialQty; i = (i + 1) | 0) {
                    // instantiate a whole new object.
                    var obj = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this._prefab, parent);
                    obj.name = System.String.format("{0} ({1})", this._prefab.name, Bridge.box(Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0))), System.Int32));

                    // Add the unique GameObject ID to our MemberHashset so we know this GO belongs to us.
                    this.MemberIDs.add(obj.GetInstanceID());

                    obj.SetActive(false);

                    this._inactive.Enqueue(obj);
                }
            },
            /*SimplePool+Pool.Preload end.*/

            /*SimplePool+Pool.Spawn$1 start.*/
            Spawn$1: function (pos, rot) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Spawn$1", this ); }

                while (true) {
                    var obj;
                    if (this._inactive.Count === 0) {
                        // We don't have an object in our pool, so we
                        // instantiate a whole new object.
                        obj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this._prefab, pos.$clone(), rot.$clone());
                        obj.name = System.String.format("{0} ({1})", this._prefab.name, Bridge.box(Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0))), System.Int32));

                        // Add the unique GameObject ID to our MemberHashset so we know this GO belongs to us.
                        this.MemberIDs.add(obj.GetInstanceID());
                    } else {
                        // Grab the last object in the inactive array
                        obj = this._inactive.Dequeue();

                        if (UnityEngine.GameObject.op_Equality(obj, null)) {
                            // The inactive object we expected to find no longer exists.
                            // The most likely causes are:
                            //   - Someone calling Destroy() on our object
                            //   - A scene change (which will destroy all our objects).
                            //     NOTE: This could be prevented with a DontDestroyOnLoad
                            //	   if you really don't want this.
                            // No worries -- we'll just try the next one in our sequence.

                            continue;
                        }
                    }
                    obj.transform.position = pos.$clone();
                    obj.transform.rotation = rot.$clone();
                    obj.SetActive(true);
                    return obj;
                }
            },
            /*SimplePool+Pool.Spawn$1 end.*/

            /*SimplePool+Pool.Spawn start.*/
            Spawn: function (T, pos, rot) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Spawn", this ); }

                return this.Spawn$1(pos.$clone(), rot.$clone()).GetComponent(T);
            },
            /*SimplePool+Pool.Spawn end.*/

            /*SimplePool+Pool.Despawn start.*/
            Despawn: function (obj) {
if ( TRACE ) { TRACE( "SimplePool.Pool#Despawn", this ); }

                if (!obj.activeSelf) {
                    return;
                }
                obj.SetActive(false);
                // Since Stack doesn't have a Capacity member, we can't control
                // the growth factor if it does have to expand an internal array.
                // On the other hand, it might simply be using a linked list 
                // internally.  But then, why does it allow us to specify a size
                // in the constructor? Maybe it's a placebo? Stack is weird.
                this._inactive.Enqueue(obj);
            },
            /*SimplePool+Pool.Despawn end.*/


        },
        overloads: {
            "Spawn(Vector3, Quaternion)": "Spawn$1"
        }
    });
    /*SimplePool+Pool end.*/

    /*SingletonWithouMono$1 start.*/
    Bridge.define("SingletonWithouMono$1", function (T) { return {
        statics: {
            fields: {
                instance: Bridge.getDefaultValue(T)
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Instance#get", this ); }

                        if (Bridge.rValue(SingletonWithouMono$1(T).instance) != null) {
                            return Bridge.rValue(SingletonWithouMono$1(T).instance);
                        }
                        SingletonWithouMono$1(T).instance = Bridge.createInstance(T);
                        (Bridge.as(Bridge.rValue(SingletonWithouMono$1(T).instance), SingletonWithouMono$1(T))).Initialize();
                        return Bridge.rValue(SingletonWithouMono$1(T).instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#init", this ); }

                    this.instance = Bridge.getDefaultValue(T);
                }
            }
        },
        fields: {
            initialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#init", this ); }

                this.initialized = false;
            }
        },
        methods: {
            /*SingletonWithouMono$1.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Initialize", this ); }

                if (this.initialized) {
                    return;
                }
                this.initialized = true;
            },
            /*SingletonWithouMono$1.Initialize end.*/

            /*SingletonWithouMono$1.Preload start.*/
            Preload: function () {
if ( TRACE ) { TRACE( "SingletonWithouMono$1#Preload", this ); }
 },
            /*SingletonWithouMono$1.Preload end.*/


        }
    }; });
    /*SingletonWithouMono$1 end.*/

    /*StyledMonoBehaviour start.*/
    Bridge.define("StyledMonoBehaviour", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*StyledMonoBehaviour end.*/

    /*StyledScriptableObject start.*/
    Bridge.define("StyledScriptableObject", {
        inherits: [UnityEngine.ScriptableObject]
    });
    /*StyledScriptableObject end.*/

    /*TypeDestroy start.*/
    Bridge.define("TypeDestroy", {
        $kind: "enum",
        statics: {
            fields: {
                DISABLE: 0,
                RESPAWNER: 1,
                DESTROY: 2
            }
        }
    });
    /*TypeDestroy end.*/

    /*VectorUlti start.*/
    Bridge.define("VectorUlti", {
        statics: {
            methods: {
                /*VectorUlti.GetVectorFromAngle:static start.*/
                GetVectorFromAngle: function (angle) {
if ( TRACE ) { TRACE( "VectorUlti#GetVectorFromAngle", this ); }

                    var angleRad = angle * (0.0174532924);
                    return new pc.Vec3( Math.cos(angleRad), 0, Math.sin(angleRad) );
                },
                /*VectorUlti.GetVectorFromAngle:static end.*/

                /*VectorUlti.GetAngleFromVector:static start.*/
                GetAngleFromVector: function (dir) {
if ( TRACE ) { TRACE( "VectorUlti#GetAngleFromVector", this ); }

                    dir = dir.clone().normalize().$clone();
                    var angle = Math.atan2(dir.z, dir.x) * UnityEngine.Mathf.Rad2Deg;
                    if (angle < 0) {
                        angle += 360;
                    }
                    //int angle = Mathf.RoundToInt(n);

                    return angle;
                },
                /*VectorUlti.GetAngleFromVector:static end.*/

                /*VectorUlti.Set$1:static start.*/
                Set$1: function (vector3, x, y, z) {
if ( TRACE ) { TRACE( "VectorUlti#Set$1", this ); }

                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    if (z === void 0) { z = null; }
                    return new pc.Vec3( x == null ? vector3.x : System.Nullable.getValue(x), y == null ? vector3.y : System.Nullable.getValue(y), z == null ? vector3.z : System.Nullable.getValue(z) );
                },
                /*VectorUlti.Set$1:static end.*/

                /*VectorUlti.Set:static start.*/
                Set: function (vector2, x, y) {
if ( TRACE ) { TRACE( "VectorUlti#Set", this ); }

                    if (x === void 0) { x = null; }
                    if (y === void 0) { y = null; }
                    return new pc.Vec2( x == null ? vector2.x : System.Nullable.getValue(x), y == null ? vector2.y : System.Nullable.getValue(y) );
                },
                /*VectorUlti.Set:static end.*/

                /*VectorUlti.Move:static start.*/
                Move: function (vector3, direction) {
if ( TRACE ) { TRACE( "VectorUlti#Move", this ); }

                    return vector3.$clone().add( direction );
                },
                /*VectorUlti.Move:static end.*/

                /*VectorUlti.ToVectorXZ:static start.*/
                ToVectorXZ: function (vector3) {
if ( TRACE ) { TRACE( "VectorUlti#ToVectorXZ", this ); }

                    return new pc.Vec2( vector3.x, vector3.z );
                },
                /*VectorUlti.ToVectorXZ:static end.*/


            }
        }
    });
    /*VectorUlti end.*/

    /*Singleton$1 start.*/
    Bridge.define("Singleton$1", function (T) { return {
        inherits: [SingletonMono$1(T)],
        statics: {
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "Singleton$1#Instance#get", this ); }

                        if (Bridge.rValue(SingletonMono$1(T).instance) != null) {
                            return Bridge.rValue(SingletonMono$1(T).instance);
                        }
                        SingletonMono$1(T).instance = Bridge.cast(UnityEngine.Object.FindObjectOfType$1(T), T);
                        if (Bridge.rValue(SingletonMono$1(T).instance) == null) {
                            UnityEngine.Debug.LogWarningFormat("[Singleton] Class {0} not found! Create empty instance", [T]);
                            SingletonMono$1(T).instance = Bridge.rValue(new UnityEngine.GameObject.$ctor2(Bridge.Reflection.getTypeName(T)).AddComponent(T));
                        }
                        return Bridge.rValue(SingletonMono$1(T).instance);
                    }
                }
            }
        }
    }; });
    /*Singleton$1 end.*/

    /*GameManager1 start.*/
    Bridge.define("GameManager1", {
        inherits: function () {
if ( TRACE ) { TRACE( "GameManager1#inherits", this ); }
 return [Singleton$1(GameManager1)]; },
        fields: {
            soundManager: null,
            mainCamera: null,
            cameraController: null,
            controllerOnPoint: null,
            baseEnemy: null,
            baseGun: null,
            positionCameraEndHuggyMove: null,
            isShootLastBullet: false,
            isSetToEnd: false,
            house: null,
            isEndGame: false,
            fistTouch: false,
            uiEndGame: null,
            guide: null,
            isHasHouse: false
        },
        methods: {
            /*GameManager1.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager1#Start", this ); }

                Luna.Unity.LifeCycle.GameStarted();
                this.controllerOnPoint.sniperGun.Preparing();
                this.baseEnemy.Init();
                if (this.isHasHouse) {
                    this.house.SetActive(true);
                }
            },
            /*GameManager1.Start end.*/

            /*GameManager1.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManager1#Update", this ); }

                if (this.isEndGame) {
                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        this.InstallFullGame();
                    }
                }
            },
            /*GameManager1.Update end.*/

            /*GameManager1.UnActiveGuide start.*/
            UnActiveGuide: function () {
if ( TRACE ) { TRACE( "GameManager1#UnActiveGuide", this ); }

                this.guide.SetActive(false);
            },
            /*GameManager1.UnActiveGuide end.*/

            /*GameManager1.SetUpWhenShotMissed start.*/
            SetUpWhenShotMissed: function () {
if ( TRACE ) { TRACE( "GameManager1#SetUpWhenShotMissed", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                //controllerOnPoint.scopeOverlay.gameObject.SetActive(false);
                //uiEndGame.SetActive(true);
                //isEndGame = true;
            },
            /*GameManager1.SetUpWhenShotMissed end.*/

            /*GameManager1.SetUpCameraEnd start.*/
            SetUpCameraEnd: function () {
if ( TRACE ) { TRACE( "GameManager1#SetUpCameraEnd", this ); }

                this.cameraController.isLastShootCamera = false;
                this.mainCamera.transform.position = new pc.Vec3( this.positionCameraEndHuggyMove.position.x, this.positionCameraEndHuggyMove.position.y, this.positionCameraEndHuggyMove.position.z );
                this.mainCamera.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( this.positionCameraEndHuggyMove.rotation.x, this.positionCameraEndHuggyMove.rotation.y, this.positionCameraEndHuggyMove.rotation.z );
                this.mainCamera.fieldOfView = 60;
            },
            /*GameManager1.SetUpCameraEnd end.*/

            /*GameManager1.SetUpToEnd start.*/
            SetUpToEnd: function () {
if ( TRACE ) { TRACE( "GameManager1#SetUpToEnd", this ); }

                this.isSetToEnd = true;
                this.guide.SetActive(false);
                this.baseEnemy.transform.position = new pc.Vec3( 0, 0, 32 );
                DG.Tweening.ShortcutExtensions.DOMove(this.baseEnemy.transform, new pc.Vec3( 0, 0, -20 ), 15);
                Luna.Unity.LifeCycle.GameEnded();
                this.controllerOnPoint.scopeOverlay.gameObject.SetActive(false);
                this.baseGun.gun.SetActive(false);
                this.baseGun.canvasGun.SetActive(false);
                this.uiEndGame.SetActive(true);
                this.isEndGame = true;
            },
            /*GameManager1.SetUpToEnd end.*/

            /*GameManager1.InstallFullGame start.*/
            InstallFullGame: function () {
if ( TRACE ) { TRACE( "GameManager1#InstallFullGame", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*GameManager1.InstallFullGame end.*/


        }
    });
    /*GameManager1 end.*/

    /*GlobalInstance start.*/
    Bridge.define("GlobalInstance", {
        inherits: function () {
if ( TRACE ) { TRACE( "GlobalInstance#inherits", this ); }
 return [Singleton$1(GlobalInstance)]; },
        fields: {
            gameManagerInstance: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GlobalInstance#init", this ); }

                this.gameManagerInstance = Singleton$1(GameManager1).Instance;
            }
        }
    });
    /*GlobalInstance end.*/

    /*SingletonDontDestroyOnLoad$1 start.*/
    Bridge.define("SingletonDontDestroyOnLoad$1", function (T) { return {
        inherits: [Singleton$1(T)],
        methods: {
            /*SingletonDontDestroyOnLoad$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SingletonDontDestroyOnLoad$1#Awake", this ); }

                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                Singleton$1(T).prototype.Awake.call(this);
            },
            /*SingletonDontDestroyOnLoad$1.Awake end.*/


        }
    }; });
    /*SingletonDontDestroyOnLoad$1 end.*/

    /*SoundController start.*/
    Bridge.define("SoundController", {
        inherits: function () {
if ( TRACE ) { TRACE( "SoundController#inherits", this ); }
 return [Singleton$1(SoundController)]; },
        fields: {
            audioSourceFX: null,
            audioSourceBG: null,
            clipGiantWalk: null,
            clipShoot: null,
            clipReload1: null,
            clipReload2: null,
            clipReload3: null,
            clipGiantHit: null
        },
        methods: {
            /*SoundController.PlaySoundShoot start.*/
            PlaySoundShoot: function () {
if ( TRACE ) { TRACE( "SoundController#PlaySoundShoot", this ); }

                this.PlaySoundFX(this.clipShoot);
            },
            /*SoundController.PlaySoundShoot end.*/

            /*SoundController.PlaySoundGiantHit start.*/
            PlaySoundGiantHit: function () {
if ( TRACE ) { TRACE( "SoundController#PlaySoundGiantHit", this ); }

                this.PlaySoundFX(this.clipGiantHit);
            },
            /*SoundController.PlaySoundGiantHit end.*/

            /*SoundController.PlayReload1 start.*/
            PlayReload1: function () {
if ( TRACE ) { TRACE( "SoundController#PlayReload1", this ); }

                this.PlaySoundFX(this.clipReload1);
            },
            /*SoundController.PlayReload1 end.*/

            /*SoundController.PlayReload2 start.*/
            PlayReload2: function () {
if ( TRACE ) { TRACE( "SoundController#PlayReload2", this ); }

                this.PlaySoundFX(this.clipReload2);
            },
            /*SoundController.PlayReload2 end.*/

            /*SoundController.PlayReload3 start.*/
            PlayReload3: function () {
if ( TRACE ) { TRACE( "SoundController#PlayReload3", this ); }

                this.PlaySoundFX(this.clipReload3);
            },
            /*SoundController.PlayReload3 end.*/

            /*SoundController.PlaySoundFX start.*/
            PlaySoundFX: function (audioClip) {
if ( TRACE ) { TRACE( "SoundController#PlaySoundFX", this ); }

                this.audioSourceFX.PlayOneShot(audioClip);
            },
            /*SoundController.PlaySoundFX end.*/

            /*SoundController.PlaySoundBG start.*/
            PlaySoundBG: function () {
if ( TRACE ) { TRACE( "SoundController#PlaySoundBG", this ); }

                this.audioSourceBG.Play();
            },
            /*SoundController.PlaySoundBG end.*/

            /*SoundController.StopSound start.*/
            StopSound: function () {
if ( TRACE ) { TRACE( "SoundController#StopSound", this ); }

                this.audioSourceBG.Stop();
                this.audioSourceFX.Stop();
            },
            /*SoundController.StopSound end.*/


        }
    });
    /*SoundController end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.UI","System.Collections","UnityEngine.EventSystems","System.Collections.Generic","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*BaseEnemy start.*/
    $m("BaseEnemy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"EnemyHit","t":8,"pi":[{"n":"damage","pt":$n[0].Single,"ps":0}],"sn":"EnemyHit","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"anim","t":4,"rt":$n[1].Animator,"sn":"anim"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"currentHp","t":4,"rt":$n[0].Single,"sn":"currentHp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hp","t":4,"rt":$n[0].Single,"sn":"hp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hpBar","t":4,"rt":$n[1].GameObject,"sn":"hpBar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hpImg","t":4,"rt":$n[2].Image,"sn":"hpImg"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isHit","t":4,"rt":$n[0].Boolean,"sn":"isHit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"pointLastShootCam","t":4,"rt":$n[1].Transform,"sn":"pointLastShootCam"},{"a":2,"n":"pointTargetMove","t":4,"rt":$n[1].Transform,"sn":"pointTargetMove"},{"a":2,"n":"posZEnd","t":4,"rt":$n[0].Single,"sn":"posZEnd","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BaseEnemy end.*/

    /*BaseGun start.*/
    $m("BaseGun", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckTargetToTakeDamage","t":8,"sn":"CheckTargetToTakeDamage","rt":$n[0].Void},{"a":2,"n":"ExploreFx","t":8,"sn":"ExploreFx","rt":$n[0].Void},{"a":2,"n":"FireBullet","t":8,"sn":"FireBullet","rt":$n[0].Void},{"a":1,"n":"IEDelaySetup","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"IEDelaySetup","rt":$n[3].IEnumerator,"p":[$n[0].Single]},{"a":2,"n":"Preparing","t":8,"sn":"Preparing","rt":$n[0].Void},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"bulletObject","t":4,"rt":$n[1].GameObject,"sn":"bulletObject"},{"a":2,"n":"canvasGun","t":4,"rt":$n[1].GameObject,"sn":"canvasGun"},{"a":2,"n":"fireFx","t":4,"rt":$n[1].ParticleSystem,"sn":"fireFx"},{"a":2,"n":"gun","t":4,"rt":$n[1].GameObject,"sn":"gun"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"hitObject","t":4,"rt":BaseEnemy,"sn":"hitObject"},{"a":2,"n":"isShootBulletFollowCamera","t":4,"rt":$n[0].Boolean,"sn":"isShootBulletFollowCamera","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"loadBulletPos","t":4,"rt":$n[1].Vector3,"sn":"loadBulletPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"loadBulletRot","t":4,"rt":$n[1].Vector3,"sn":"loadBulletRot"},{"a":2,"n":"pointShoot","t":4,"rt":$n[1].Transform,"sn":"pointShoot"},{"a":2,"n":"prefBullet","t":4,"rt":BulletController,"sn":"prefBullet"},{"a":2,"n":"shootForce","t":4,"rt":$n[0].Single,"sn":"shootForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BaseGun end.*/

    /*BuildingController start.*/
    $m("BuildingController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"buildingCheck","t":4,"rt":$n[1].GameObject,"sn":"buildingCheck"},{"a":2,"n":"buildingRigid","t":4,"rt":$n[1].GameObject,"sn":"buildingRigid"}]}; }, $n);
    /*BuildingController end.*/

    /*BulletController start.*/
    $m("BulletController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"BulletRigid","t":4,"rt":$n[1].Rigidbody,"sn":"BulletRigid"},{"a":2,"n":"bloodFx","t":4,"rt":$n[1].ParticleSystem,"sn":"bloodFx"},{"a":2,"n":"damage","t":4,"rt":$n[0].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"force","t":4,"rt":$n[0].Single,"sn":"force","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"transBulletCamera","t":4,"rt":$n[1].Transform,"sn":"transBulletCamera"},{"a":2,"n":"transBulletCamera2","t":4,"rt":$n[1].Transform,"sn":"transBulletCamera2"}]}; }, $n);
    /*BulletController end.*/

    /*BulletRotation start.*/
    $m("BulletRotation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void}]}; }, $n);
    /*BulletRotation end.*/

    /*CameraController start.*/
    $m("CameraController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"IESetUp","t":8,"pi":[{"n":"times","pt":$n[0].Single,"ps":0}],"sn":"IESetUp","rt":$n[3].IEnumerator,"p":[$n[0].Single]},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"SetUpLastShootCamera","t":8,"sn":"SetUpLastShootCamera","rt":$n[0].Void},{"a":2,"n":"isLastShootCamera","t":4,"rt":$n[0].Boolean,"sn":"isLastShootCamera","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"posFollow","t":4,"rt":$n[1].Transform,"sn":"posFollow"}]}; }, $n);
    /*CameraController end.*/

    /*ControllerOnPointer start.*/
    $m("ControllerOnPointer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClampAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0},{"n":"min","pt":$n[0].Single,"ps":1},{"n":"max","pt":$n[0].Single,"ps":2}],"sn":"ClampAngle","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[4].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[4].PointerEventData]},{"a":1,"n":"OnScoped","t":8,"sn":"OnScoped","rt":$n[0].Void},{"a":1,"n":"Shooting","t":8,"sn":"Shooting","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UnScoped","t":8,"sn":"UnScoped","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"FOVcache","t":4,"rt":$n[0].Single,"sn":"FOVcache","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"FOVscoped","t":4,"rt":$n[0].Single,"sn":"FOVscoped","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"downCamBound","t":4,"rt":$n[0].Single,"sn":"downCamBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gunMovingPos","t":4,"rt":$n[1].Vector3,"sn":"gunMovingPos"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isCanShoot","t":4,"rt":$n[0].Boolean,"sn":"isCanShoot","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isInteractive","t":4,"rt":$n[0].Boolean,"sn":"isInteractive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isShooting","t":4,"rt":$n[0].Boolean,"sn":"isShooting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStartClick","t":4,"rt":$n[0].Boolean,"sn":"isStartClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMousePosition","t":4,"rt":$n[1].Vector3,"sn":"lastMousePosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"leftCamBound","t":4,"rt":$n[0].Single,"sn":"leftCamBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rightCamBound","t":4,"rt":$n[0].Single,"sn":"rightCamBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"scopeOverlay","t":4,"rt":$n[2].Image,"sn":"scopeOverlay"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"smoothTime","t":4,"rt":$n[0].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sniperGun","t":4,"rt":BaseGun,"sn":"sniperGun"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"upCamBound","t":4,"rt":$n[0].Single,"sn":"upCamBound","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ControllerOnPointer end.*/

    /*CutOutMaskUI start.*/
    $m("CutOutMaskUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"materialForRendering","t":16,"rt":$n[1].Material,"g":{"ov":true,"a":2,"n":"get_materialForRendering","t":8,"rt":$n[1].Material,"fg":"materialForRendering"},"fn":"materialForRendering"}]}; }, $n);
    /*CutOutMaskUI end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnScoped","t":8,"sn":"OnScoped","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"UnScoped","t":8,"sn":"UnScoped","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gunMovingPos","t":4,"rt":$n[1].Vector3,"sn":"gunMovingPos"},{"a":2,"n":"isInteractive","t":4,"rt":$n[0].Boolean,"sn":"isInteractive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStartClick","t":4,"rt":$n[0].Boolean,"sn":"isStartClick","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scopeOverlay","t":4,"rt":$n[2].Image,"sn":"scopeOverlay"},{"a":2,"n":"sniperGun","t":4,"rt":BaseGun,"sn":"sniperGun"}]}; }, $n);
    /*PlayerController end.*/

    /*ScopeController start.*/
    $m("ScopeController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"bgFade","t":4,"rt":$n[2].Image,"sn":"bgFade"},{"a":2,"n":"mainScope","t":4,"rt":$n[2].Image,"sn":"mainScope"}]}; }, $n);
    /*ScopeController end.*/

    /*SoundController start.*/
    $m("SoundController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PlayReload1","t":8,"sn":"PlayReload1","rt":$n[0].Void},{"a":2,"n":"PlayReload2","t":8,"sn":"PlayReload2","rt":$n[0].Void},{"a":2,"n":"PlayReload3","t":8,"sn":"PlayReload3","rt":$n[0].Void},{"a":2,"n":"PlaySoundBG","t":8,"sn":"PlaySoundBG","rt":$n[0].Void},{"a":1,"n":"PlaySoundFX","t":8,"pi":[{"n":"audioClip","pt":$n[1].AudioClip,"ps":0}],"sn":"PlaySoundFX","rt":$n[0].Void,"p":[$n[1].AudioClip]},{"a":2,"n":"PlaySoundGiantHit","t":8,"sn":"PlaySoundGiantHit","rt":$n[0].Void},{"a":2,"n":"PlaySoundShoot","t":8,"sn":"PlaySoundShoot","rt":$n[0].Void},{"a":2,"n":"StopSound","t":8,"sn":"StopSound","rt":$n[0].Void},{"a":2,"n":"audioSourceBG","t":4,"rt":$n[1].AudioSource,"sn":"audioSourceBG"},{"a":2,"n":"audioSourceFX","t":4,"rt":$n[1].AudioSource,"sn":"audioSourceFX"},{"a":2,"n":"clipGiantHit","t":4,"rt":$n[1].AudioClip,"sn":"clipGiantHit"},{"a":2,"n":"clipGiantWalk","t":4,"rt":$n[1].AudioClip,"sn":"clipGiantWalk"},{"a":2,"n":"clipReload1","t":4,"rt":$n[1].AudioClip,"sn":"clipReload1"},{"a":2,"n":"clipReload2","t":4,"rt":$n[1].AudioClip,"sn":"clipReload2"},{"a":2,"n":"clipReload3","t":4,"rt":$n[1].AudioClip,"sn":"clipReload3"},{"a":2,"n":"clipShoot","t":4,"rt":$n[1].AudioClip,"sn":"clipShoot"}]}; }, $n);
    /*SoundController end.*/

    /*GameManager1 start.*/
    $m("GameManager1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InstallFullGame","t":8,"sn":"InstallFullGame","rt":$n[0].Void},{"a":2,"n":"SetUpCameraEnd","t":8,"sn":"SetUpCameraEnd","rt":$n[0].Void},{"a":2,"n":"SetUpToEnd","t":8,"sn":"SetUpToEnd","rt":$n[0].Void},{"a":2,"n":"SetUpWhenShotMissed","t":8,"sn":"SetUpWhenShotMissed","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UnActiveGuide","t":8,"sn":"UnActiveGuide","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"baseEnemy","t":4,"rt":BaseEnemy,"sn":"baseEnemy"},{"a":2,"n":"baseGun","t":4,"rt":BaseGun,"sn":"baseGun"},{"a":2,"n":"cameraController","t":4,"rt":CameraController,"sn":"cameraController"},{"a":2,"n":"controllerOnPoint","t":4,"rt":ControllerOnPointer,"sn":"controllerOnPoint"},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"fistTouch","t":4,"rt":$n[0].Boolean,"sn":"fistTouch","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"guide","t":4,"rt":$n[1].GameObject,"sn":"guide"},{"a":2,"n":"house","t":4,"rt":$n[1].GameObject,"sn":"house"},{"a":1,"n":"isEndGame","t":4,"rt":$n[0].Boolean,"sn":"isEndGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Luna Config"),new UnityEngine.LunaPlaygroundFieldAttribute("HasHouse", 0, "Game Config", false, null)],"a":2,"n":"isHasHouse","t":4,"rt":$n[0].Boolean,"sn":"isHasHouse","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isSetToEnd","t":4,"rt":$n[0].Boolean,"sn":"isSetToEnd","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isShootLastBullet","t":4,"rt":$n[0].Boolean,"sn":"isShootLastBullet","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":2,"n":"positionCameraEndHuggyMove","t":4,"rt":$n[1].Transform,"sn":"positionCameraEndHuggyMove"},{"a":2,"n":"soundManager","t":4,"rt":SoundController,"sn":"soundManager"},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"uiEndGame","t":4,"rt":$n[1].GameObject,"sn":"uiEndGame"}]}; }, $n);
    /*GameManager1 end.*/

    /*TypeDestroy start.*/
    $m("TypeDestroy", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DESTROY","is":true,"t":4,"rt":TypeDestroy,"sn":"DESTROY","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}},{"a":2,"n":"DISABLE","is":true,"t":4,"rt":TypeDestroy,"sn":"DISABLE","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}},{"a":2,"n":"RESPAWNER","is":true,"t":4,"rt":TypeDestroy,"sn":"RESPAWNER","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}}]}; }, $n);
    /*TypeDestroy end.*/

    /*AutoDestroy start.*/
    $m("AutoDestroy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"timeOut","t":4,"rt":$n[0].Single,"sn":"timeOut","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timeStart","t":4,"rt":$n[0].Single,"sn":"timeStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"typeDestroy","t":4,"rt":TypeDestroy,"sn":"typeDestroy","box":function ($v) { return Bridge.box($v, TypeDestroy, System.Enum.toStringFn(TypeDestroy));}}]}; }, $n);
    /*AutoDestroy end.*/

    /*AutoDestructor start.*/
    $m("AutoDestructor", function () { return {"nested":[AutoDestructor.TypeDestroy],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AutoDestroy","t":8,"sn":"AutoDestroy","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isPutToPool","t":4,"rt":$n[0].Boolean,"sn":"isPutToPool","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeDestroy","t":4,"rt":$n[0].Single,"sn":"timeDestroy","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"typeDestroy","t":4,"rt":AutoDestructor.TypeDestroy,"sn":"typeDestroy","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}}]}; }, $n);
    /*AutoDestructor end.*/

    /*AutoDestructor+TypeDestroy start.*/
    $m("AutoDestructor.TypeDestroy", function () { return {"td":AutoDestructor,"att":259,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Destroy","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"Destroy","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}},{"a":2,"n":"Disable","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"Disable","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}},{"a":2,"n":"PutToPool","is":true,"t":4,"rt":AutoDestructor.TypeDestroy,"sn":"PutToPool","box":function ($v) { return Bridge.box($v, AutoDestructor.TypeDestroy, System.Enum.toStringFn(AutoDestructor.TypeDestroy));}}]}; }, $n);
    /*AutoDestructor+TypeDestroy end.*/

    /*DefineHelper start.*/
    $m("DefineHelper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Move","is":true,"t":4,"rt":$n[0].String,"sn":"Move"}]}; }, $n);
    /*DefineHelper end.*/

    /*NameTag start.*/
    $m("NameTag", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Building","is":true,"t":4,"rt":$n[0].String,"sn":"Building"},{"a":2,"n":"Enemy","is":true,"t":4,"rt":$n[0].String,"sn":"Enemy"},{"a":2,"n":"Player","is":true,"t":4,"rt":$n[0].String,"sn":"Player"}]}; }, $n);
    /*NameTag end.*/

    /*EventID start.*/
    $m("EventID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FailedGame","is":true,"t":4,"rt":EventID,"sn":"FailedGame","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"FirstTouch","is":true,"t":4,"rt":EventID,"sn":"FirstTouch","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}},{"a":2,"n":"WinGame","is":true,"t":4,"rt":EventID,"sn":"WinGame","box":function ($v) { return Bridge.box($v, EventID, System.Enum.toStringFn(EventID));}}]}; }, $n);
    /*EventID end.*/

    /*EventDispatcher start.*/
    $m("EventDispatcher", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"ClearAllListener","t":8,"sn":"ClearAllListener","rt":$n[0].Void},{"a":2,"n":"HasInstance","is":true,"t":8,"sn":"HasInstance","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"PostEvent","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"param","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[EventID,$n[0].Object]},{"a":2,"n":"RegisterListener","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"RegisterListener","rt":$n[0].Void,"p":[EventID,Function]},{"a":2,"n":"RemoveListener","t":8,"pi":[{"n":"eventID","pt":EventID,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"RemoveListener","rt":$n[0].Void,"p":[EventID,Function]},{"a":2,"n":"Instance","is":true,"t":16,"rt":EventDispatcher,"g":{"a":2,"n":"get_Instance","t":8,"rt":EventDispatcher,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[EventDispatcher],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_listeners","t":4,"rt":$n[5].Dictionary$2(EventID,Function),"sn":"_listeners"},{"a":1,"n":"s_instance","is":true,"t":4,"rt":EventDispatcher,"sn":"s_instance"}]}; }, $n);
    /*EventDispatcher end.*/

    /*EventDispatcherExtension start.*/
    $m("EventDispatcherExtension", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1}],"sn":"PostEvent","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID]},{"a":2,"n":"PostEvent","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"param","pt":$n[0].Object,"ps":2}],"sn":"PostEvent$1","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,$n[0].Object]},{"a":2,"n":"RegisterListener","is":true,"t":8,"pi":[{"n":"listener","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RegisterListener","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,Function]},{"a":2,"n":"RemoveListener","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].MonoBehaviour,"ps":0},{"n":"eventID","pt":EventID,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"RemoveListener","rt":$n[0].Void,"p":[$n[1].MonoBehaviour,EventID,Function]}]}; }, $n);
    /*EventDispatcherExtension end.*/

    /*GlobalInstance start.*/
    $m("GlobalInstance", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"gameManagerInstance","t":4,"rt":GameManager1,"sn":"gameManagerInstance"}]}; }, $n);
    /*GlobalInstance end.*/

    /*HelperUtility start.*/
    $m("HelperUtility", function () { return {"nested":[Function],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOLocalRotateQuaternion","is":true,"t":8,"pi":[{"n":"endValue","pt":$n[1].Quaternion,"ps":0},{"n":"speedRotate","pt":$n[0].Single,"ps":1},{"n":"objLookAt","pt":$n[1].GameObject,"ps":2},{"n":"actionComplete","pt":Function,"ps":3}],"sn":"DOLocalRotateQuaternion","rt":$n[3].IEnumerator,"p":[$n[1].Quaternion,$n[0].Single,$n[1].GameObject,Function]},{"a":2,"n":"DecimalRounding","is":true,"t":8,"pi":[{"n":"Num","pt":$n[0].Single,"ps":0},{"n":"Round","pt":$n[0].Int32,"ps":1}],"sn":"DecimalRounding","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DisruptiveArrayObject","is":true,"t":8,"pi":[{"n":"array","pt":System.Array.type(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveArrayObject","rt":System.Array.type(System.Object),"p":[System.Array.type(System.Object)]},{"a":2,"n":"DisruptiveList","is":true,"t":8,"pi":[{"n":"array","pt":$n[5].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveList","rt":$n[5].List$1(System.Object),"p":[$n[5].List$1(System.Object)]},{"a":2,"n":"DisruptiveListObject","is":true,"t":8,"pi":[{"n":"array","pt":$n[5].List$1(System.Object),"ps":0}],"sn":"DisruptiveListObject$1","rt":$n[5].List$1(System.Object),"p":[$n[5].List$1(System.Object)]},{"a":2,"n":"DisruptiveListObject","is":true,"t":8,"pi":[{"n":"array","pt":$n[5].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveListObject","rt":$n[5].List$1(System.Object),"p":[$n[5].List$1(System.Object)]},{"a":2,"n":"DisruptiveListSelf","is":true,"t":8,"pi":[{"n":"array","pt":$n[5].List$1(System.Object),"ps":0}],"tpc":1,"tprm":["T"],"sn":"DisruptiveListSelf","rt":$n[5].List$1(System.Object),"p":[$n[5].List$1(System.Object)]},{"a":2,"n":"GetDirectionFromAngle","is":true,"t":8,"pi":[{"n":"vectorP","pt":$n[1].Vector3,"ps":0},{"n":"angle","pt":$n[0].Single,"ps":1},{"n":"positionStart","pt":$n[1].Vector3,"ps":2}],"sn":"GetDirectionFromAngle","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"GetDirectionFromAngle_2","is":true,"t":8,"pi":[{"n":"vectorP","pt":$n[1].Vector3,"ps":0},{"n":"angle","pt":$n[0].Single,"ps":1},{"n":"positionStart","pt":$n[1].Vector3,"ps":2}],"sn":"GetDirectionFromAngle_2","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Single,$n[1].Vector3]},{"a":2,"n":"GetPointDistanceFromObject","is":true,"t":8,"pi":[{"n":"distance","pt":$n[0].Single,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1},{"n":"fromPoint","pt":$n[1].Vector3,"ps":2}],"sn":"GetPointDistanceFromObject","rt":$n[1].Vector3,"p":[$n[0].Single,$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"GetRotateDirection","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].Quaternion,"ps":0},{"n":"to","pt":$n[1].Quaternion,"ps":1}],"sn":"GetRotateDirection","rt":$n[0].Boolean,"p":[$n[1].Quaternion,$n[1].Quaternion],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LookAtToDirection","is":true,"t":8,"pi":[{"n":"diretion","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"speedLockAt","dv":500.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"LookAtToDirection","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single]},{"a":2,"n":"LookAtToDirectionAngleDetal","is":true,"t":8,"pi":[{"n":"diretion","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"AngleDetal","pt":$n[0].Single,"ps":2},{"n":"speedLockAt","dv":500.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"LookAtToDirectionAngleDetal","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LookAtToPosition","is":true,"t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"speedRotate","dv":500.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"LookAtToPosition","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single]},{"a":2,"n":"LookAtToPositionAngleDetal","is":true,"t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"objLookAt","pt":$n[1].GameObject,"ps":1},{"n":"AngleDetal","pt":$n[0].Single,"ps":2},{"n":"speedRotate","dv":500.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"LookAtToPositionAngleDetal","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].GameObject,$n[0].Single,$n[0].Single]},{"a":1,"n":"PosHandle","is":true,"t":8,"pi":[{"n":"numCount","pt":$n[0].Int32,"ps":0},{"n":"MaxERow","pt":$n[0].Int32,"ps":1}],"sn":"PosHandle","rt":$n[5].List$1(System.Int32),"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"RandomCustom","is":true,"t":8,"pi":[{"n":"first","pt":$n[0].Int32,"ps":0},{"n":"last","pt":$n[0].Int32,"ps":1},{"n":"diff","pt":$n[5].List$1(System.Int32),"ps":2}],"sn":"RandomCustom","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32,$n[5].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomUnduplicated","is":true,"t":8,"pi":[{"n":"diff","pt":$n[5].List$1(System.Int32),"ps":0},{"n":"oldValues","ip":true,"pt":$n[0].Array.type(System.Int32),"ps":1}],"sn":"RandomUnduplicated","rt":$n[0].Int32,"p":[$n[5].List$1(System.Int32),$n[0].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RandomUnduplicated","is":true,"t":8,"pi":[{"n":"oldValue","pt":$n[0].Int32,"ps":0},{"n":"diff","pt":$n[5].List$1(System.Int32),"ps":1}],"sn":"RandomUnduplicated$1","rt":$n[0].Int32,"p":[$n[0].Int32,$n[5].List$1(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SelectionSortList","is":true,"t":8,"pi":[{"n":"A","pt":$n[5].List$1(System.Object),"ps":0},{"n":"compareElementList","pt":Function,"ps":1}],"sn":"SelectionSortList","rt":$n[5].List$1(System.Object),"p":[$n[5].List$1(System.Object),Function]},{"a":2,"n":"SetPos","is":true,"t":8,"pi":[{"n":"numCount","pt":$n[0].Int32,"ps":0},{"n":"MaxERow","pt":$n[0].Int32,"ps":1}],"sn":"SetPos","rt":$n[5].List$1(System.Int32),"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"StartAction","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"condition","pt":Function,"ps":1}],"sn":"StartAction","rt":$n[3].IEnumerator,"p":[Function,Function]},{"a":2,"n":"StartAction","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartAction$1","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single]},{"a":2,"n":"StartActionNotUseCorutines","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartActionNotUseCorutines","rt":$n[0].Void,"p":[Function,$n[0].Single]},{"a":2,"n":"StartActionRealTime","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"time","pt":$n[0].Single,"ps":1}],"sn":"StartActionRealTime","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single]},{"a":2,"n":"StartThread","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"timeToStop","pt":$n[0].Single,"ps":1},{"n":"actionStop","dv":null,"o":true,"pt":Function,"ps":2}],"sn":"StartThread$1","rt":$n[3].IEnumerator,"p":[Function,$n[0].Single,Function]},{"a":2,"n":"StartThread","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"conditionStop","pt":Function,"ps":1},{"n":"actionStop","dv":null,"o":true,"pt":Function,"ps":2},{"n":"time","dv":0.01,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"StartThread","rt":$n[3].IEnumerator,"p":[Function,Function,Function,$n[0].Single]}]}; }, $n);
    /*HelperUtility end.*/

    /*SelfDefine start.*/
    $m("SelfDefine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*SelfDefine end.*/

    /*MMMaths start.*/
    $m("MMMaths", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Approach","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"amount","pt":$n[0].Single,"ps":2}],"sn":"Approach","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Chance","is":true,"t":8,"pi":[{"n":"percent","pt":$n[0].Int32,"ps":0}],"sn":"Chance","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RandomVector3","is":true,"t":8,"pi":[{"n":"minimum","pt":$n[1].Vector3,"ps":0},{"n":"maximum","pt":$n[1].Vector3,"ps":1}],"sn":"RandomVector3","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"RollADice","is":true,"t":8,"pi":[{"n":"numberOfSides","pt":$n[0].Int32,"ps":0}],"sn":"RollADice","rt":$n[0].Int32,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RotatePointAroundPivot","is":true,"t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0},{"n":"pivot","pt":$n[1].Vector3,"ps":1},{"n":"angle","pt":$n[0].Single,"ps":2}],"sn":"RotatePointAroundPivot","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":2,"n":"RotatePointAroundPivot","is":true,"t":8,"pi":[{"n":"point","pt":$n[1].Vector3,"ps":0},{"n":"pivot","pt":$n[1].Vector3,"ps":1},{"n":"angle","pt":$n[1].Vector3,"ps":2}],"sn":"RotatePointAroundPivot$1","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"Sum","is":true,"t":8,"pi":[{"n":"thingsToAdd","ip":true,"pt":$n[0].Array.type(System.Int32),"ps":0}],"sn":"Sum","rt":$n[0].Int32,"p":[$n[0].Array.type(System.Int32)],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"Vector2ToVector3","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0}],"sn":"Vector2ToVector3","rt":$n[1].Vector3,"p":[$n[1].Vector2]},{"a":2,"n":"Vector2ToVector3","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector2,"ps":0},{"n":"newZValue","pt":$n[0].Single,"ps":1}],"sn":"Vector2ToVector3$1","rt":$n[1].Vector3,"p":[$n[1].Vector2,$n[0].Single]},{"a":2,"n":"Vector3ToVector2","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0}],"sn":"Vector3ToVector2","rt":$n[1].Vector2,"p":[$n[1].Vector3]}]}; }, $n);
    /*MMMaths end.*/

    /*RotateObject start.*/
    $m("RotateObject", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"angle","t":4,"rt":$n[0].Single,"sn":"angle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*RotateObject end.*/

    /*SimplePool start.*/
    $m("SimplePool", function () { return {"nested":[SimplePool.Pool],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ClearPool","is":true,"t":8,"sn":"ClearPool","rt":$n[0].Void},{"a":2,"n":"Despawn","is":true,"t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"Despawn","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"GetStackCount","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"GetStackCount","rt":$n[0].Int32,"p":[$n[1].GameObject],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Init","is":true,"t":8,"pi":[{"n":"prefab","dv":null,"o":true,"pt":$n[1].GameObject,"ps":0},{"n":"qty","dv":3,"o":true,"pt":$n[0].Int32,"ps":1}],"sn":"Init","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32]},{"a":2,"n":"PoolPreLoad","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"qty","pt":$n[0].Int32,"ps":1},{"n":"newParent","dv":null,"o":true,"pt":$n[1].Transform,"ps":2}],"sn":"PoolPreLoad","rt":$n[0].Void,"p":[$n[1].GameObject,$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Preload","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"qty","dv":1,"o":true,"pt":$n[0].Int32,"ps":1},{"n":"newParent","dv":null,"o":true,"pt":$n[1].Transform,"ps":2}],"sn":"Preload","rt":System.Array.type(UnityEngine.GameObject),"p":[$n[1].GameObject,$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":System.Object,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Spawn","rt":System.Object,"p":[System.Object]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0}],"sn":"Spawn$2","rt":$n[1].GameObject,"p":[$n[1].GameObject]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":System.Object,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1},{"n":"rot","pt":$n[1].Quaternion,"ps":2}],"tpc":1,"tprm":["T"],"sn":"Spawn$1","rt":System.Object,"p":[System.Object,$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"Spawn","is":true,"t":8,"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"pos","pt":$n[1].Vector3,"ps":1},{"n":"rot","pt":$n[1].Quaternion,"ps":2}],"sn":"Spawn$3","rt":$n[1].GameObject,"p":[$n[1].GameObject,$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"DEFAULT_POOL_SIZE","is":true,"t":4,"rt":$n[0].Int32,"sn":"DEFAULT_POOL_SIZE","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_pools","is":true,"t":4,"rt":$n[5].Dictionary$2(System.Int32,SimplePool.Pool),"sn":"_pools"}]}; }, $n);
    /*SimplePool end.*/

    /*SimplePool+Pool start.*/
    $m("SimplePool.Pool", function () { return {"td":SimplePool,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[0].Int32],"pi":[{"n":"prefab","pt":$n[1].GameObject,"ps":0},{"n":"initialQty","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"Despawn","t":8,"pi":[{"n":"obj","pt":$n[1].GameObject,"ps":0}],"sn":"Despawn","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":2,"n":"Preload","t":8,"pi":[{"n":"initialQty","pt":$n[0].Int32,"ps":0},{"n":"parent","dv":null,"o":true,"pt":$n[1].Transform,"ps":1}],"sn":"Preload","rt":$n[0].Void,"p":[$n[0].Int32,$n[1].Transform]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0},{"n":"rot","pt":$n[1].Quaternion,"ps":1}],"tpc":1,"tprm":["T"],"sn":"Spawn","rt":System.Object,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"Spawn","t":8,"pi":[{"n":"pos","pt":$n[1].Vector3,"ps":0},{"n":"rot","pt":$n[1].Quaternion,"ps":1}],"sn":"Spawn$1","rt":$n[1].GameObject,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":2,"n":"StackCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_StackCount","t":8,"rt":$n[0].Int32,"fg":"StackCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"StackCount"},{"a":2,"n":"MemberIDs","t":4,"rt":$n[5].HashSet$1(System.Int32),"sn":"MemberIDs","ro":true},{"a":1,"n":"_inactive","t":4,"rt":$n[5].Queue$1(UnityEngine.GameObject),"sn":"_inactive","ro":true},{"a":1,"n":"_nextId","t":4,"rt":$n[0].Int32,"sn":"_nextId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_prefab","t":4,"rt":$n[1].GameObject,"sn":"_prefab","ro":true}]}; }, $n);
    /*SimplePool+Pool end.*/

    /*SingletonWithouMono$1 start.*/
    $m("SingletonWithouMono$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"v":true,"a":2,"n":"Preload","t":8,"sn":"Preload","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"initialized","t":4,"rt":$n[0].Boolean,"sn":"initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*SingletonWithouMono$1 end.*/

    /*SingletonMono$1 start.*/
    $m("SingletonMono$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"instance","is":true,"t":4,"rt":T,"sn":"instance"}]}; }, $n);
    /*SingletonMono$1 end.*/

    /*Singleton$1 start.*/
    $m("Singleton$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"}]}; }, $n);
    /*Singleton$1 end.*/

    /*SingletonDontDestroyOnLoad$1 start.*/
    $m("SingletonDontDestroyOnLoad$1", function (T) { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void}]}; }, $n);
    /*SingletonDontDestroyOnLoad$1 end.*/

    /*VectorUlti start.*/
    $m("VectorUlti", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetAngleFromVector","is":true,"t":8,"pi":[{"n":"dir","pt":$n[1].Vector3,"ps":0}],"sn":"GetAngleFromVector","rt":$n[0].Single,"p":[$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetVectorFromAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0}],"sn":"GetVectorFromAngle","rt":$n[1].Vector3,"p":[$n[0].Single]},{"a":2,"n":"Move","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0},{"n":"direction","pt":$n[1].Vector3,"ps":1}],"sn":"Move","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":2,"n":"Set","is":true,"t":8,"pi":[{"n":"vector2","pt":$n[1].Vector2,"ps":0},{"n":"x","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":1},{"n":"y","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":2}],"sn":"Set","rt":$n[1].Vector2,"p":[$n[1].Vector2,$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single)]},{"a":2,"n":"Set","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0},{"n":"x","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":1},{"n":"y","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":2},{"n":"z","dv":null,"o":true,"pt":$n[0].Nullable$1(System.Single),"ps":3}],"sn":"Set$1","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single),$n[0].Nullable$1(System.Single)]},{"a":2,"n":"ToVectorXZ","is":true,"t":8,"pi":[{"n":"vector3","pt":$n[1].Vector3,"ps":0}],"sn":"ToVectorXZ","rt":$n[1].Vector2,"p":[$n[1].Vector3]}]}; }, $n);
    /*VectorUlti end.*/

    /*StyledMonoBehaviour start.*/
    $m("StyledMonoBehaviour", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*StyledMonoBehaviour end.*/

    /*StyledScriptableObject start.*/
    $m("StyledScriptableObject", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*StyledScriptableObject end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[6].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[6].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[8].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[8].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[8].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[8].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[8].PathType,$n[8].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[8].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[7].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[8].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].SpriteRenderer,$n[1].Gradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[8].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[8].Tweener,"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[8].Tweener,"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[8].Tweener,"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[7].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[2].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[7].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[2].Image,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[8].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6}],"sn":"DOShakeAnchorPos$1","rt":$n[8].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[8].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[7].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[2].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[8].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[7].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[8].Tweener,"p":[$n[2].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[8].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[8].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":$n[1].Gradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[8].Sequence,"p":[$n[1].Material,$n[1].Gradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[7].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[8].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[8].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[8].DOTweenCYInstruction.WaitForCompletion,$n[8].DOTweenCYInstruction.WaitForRewind,$n[8].DOTweenCYInstruction.WaitForKill,$n[8].DOTweenCYInstruction.WaitForElapsedLoops,$n[8].DOTweenCYInstruction.WaitForPosition,$n[8].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[8].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].Tween],"pi":[{"n":"tween","pt":$n[8].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[8].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[8].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[8].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[8].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[7].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[9].Path,$n[0].Single,$n[8].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[8].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[11].PathOptions,$n[8].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Boxophobic.StyledGUI.StyledBanner start.*/
    $m("Boxophobic.StyledGUI.StyledBanner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"title","pt":$n[0].String,"ps":0}],"sn":"$ctor3"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String],"pi":[{"n":"title","pt":$n[0].String,"ps":0},{"n":"helpURL","pt":$n[0].String,"ps":1}],"sn":"$ctor4"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].String],"pi":[{"n":"title","pt":$n[0].String,"ps":0},{"n":"subtitle","pt":$n[0].String,"ps":1},{"n":"helpURL","pt":$n[0].String,"ps":2}],"sn":"$ctor5"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].String],"pi":[{"n":"colorR","pt":$n[0].Single,"ps":0},{"n":"colorG","pt":$n[0].Single,"ps":1},{"n":"colorB","pt":$n[0].Single,"ps":2},{"n":"title","pt":$n[0].String,"ps":3}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].String,$n[0].String],"pi":[{"n":"colorR","pt":$n[0].Single,"ps":0},{"n":"colorG","pt":$n[0].Single,"ps":1},{"n":"colorB","pt":$n[0].Single,"ps":2},{"n":"title","pt":$n[0].String,"ps":3},{"n":"helpURL","pt":$n[0].String,"ps":4}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].String,$n[0].String,$n[0].String],"pi":[{"n":"colorR","pt":$n[0].Single,"ps":0},{"n":"colorG","pt":$n[0].Single,"ps":1},{"n":"colorB","pt":$n[0].Single,"ps":2},{"n":"title","pt":$n[0].String,"ps":3},{"n":"subtitle","pt":$n[0].String,"ps":4},{"n":"helpURL","pt":$n[0].String,"ps":5}],"sn":"$ctor2"},{"a":2,"n":"colorB","t":4,"rt":$n[0].Single,"sn":"colorB","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"colorG","t":4,"rt":$n[0].Single,"sn":"colorG","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"colorR","t":4,"rt":$n[0].Single,"sn":"colorR","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"helpURL","t":4,"rt":$n[0].String,"sn":"helpURL"},{"a":2,"n":"title","t":4,"rt":$n[0].String,"sn":"title"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledBanner end.*/

    /*Boxophobic.StyledGUI.StyledButton start.*/
    $m("Boxophobic.StyledGUI.StyledButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"Text","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Single,$n[0].Single],"pi":[{"n":"Text","pt":$n[0].String,"ps":0},{"n":"Top","pt":$n[0].Single,"ps":1},{"n":"Down","pt":$n[0].Single,"ps":2}],"sn":"$ctor1"},{"a":2,"n":"Down","t":4,"rt":$n[0].Single,"sn":"down","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Text","t":4,"rt":$n[0].String,"sn":"text"},{"a":2,"n":"Top","t":4,"rt":$n[0].Single,"sn":"top","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledButton end.*/

    /*Boxophobic.StyledGUI.StyledCategory start.*/
    $m("Boxophobic.StyledGUI.StyledCategory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"category","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Boolean],"pi":[{"n":"category","pt":$n[0].String,"ps":0},{"n":"colapsable","pt":$n[0].Boolean,"ps":1}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Single,$n[0].Single],"pi":[{"n":"category","pt":$n[0].String,"ps":0},{"n":"top","pt":$n[0].Single,"ps":1},{"n":"down","pt":$n[0].Single,"ps":2}],"sn":"$ctor3"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Int32,$n[0].Int32,$n[0].Boolean],"pi":[{"n":"category","pt":$n[0].String,"ps":0},{"n":"top","pt":$n[0].Int32,"ps":1},{"n":"down","pt":$n[0].Int32,"ps":2},{"n":"colapsable","pt":$n[0].Boolean,"ps":3}],"sn":"$ctor2"},{"a":2,"n":"category","t":4,"rt":$n[0].String,"sn":"category"},{"a":2,"n":"colapsable","t":4,"rt":$n[0].Boolean,"sn":"colapsable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"down","t":4,"rt":$n[0].Single,"sn":"down","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"top","t":4,"rt":$n[0].Single,"sn":"top","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledCategory end.*/

    /*Boxophobic.StyledGUI.StyledEnum start.*/
    $m("Boxophobic.StyledGUI.StyledEnum", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].Int32,$n[0].Int32],"pi":[{"n":"file","pt":$n[0].String,"ps":0},{"n":"options","pt":$n[0].String,"ps":1},{"n":"top","pt":$n[0].Int32,"ps":2},{"n":"down","pt":$n[0].Int32,"ps":3}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].String,$n[0].Int32,$n[0].Int32],"pi":[{"n":"display","pt":$n[0].String,"ps":0},{"n":"file","pt":$n[0].String,"ps":1},{"n":"options","pt":$n[0].String,"ps":2},{"n":"top","pt":$n[0].Int32,"ps":3},{"n":"down","pt":$n[0].Int32,"ps":4}],"sn":"$ctor1"},{"a":2,"n":"display","t":4,"rt":$n[0].String,"sn":"display"},{"a":2,"n":"down","t":4,"rt":$n[0].Int32,"sn":"down","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"file","t":4,"rt":$n[0].String,"sn":"file"},{"a":2,"n":"options","t":4,"rt":$n[0].String,"sn":"options"},{"a":2,"n":"top","t":4,"rt":$n[0].Int32,"sn":"top","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledEnum end.*/

    /*Boxophobic.StyledGUI.StyledIndent start.*/
    $m("Boxophobic.StyledGUI.StyledIndent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"indent","pt":$n[0].Int32,"ps":0}],"sn":"ctor"},{"a":2,"n":"indent","t":4,"rt":$n[0].Int32,"sn":"indent","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledIndent end.*/

    /*Boxophobic.StyledGUI.StyledInteractive start.*/
    $m("Boxophobic.StyledGUI.StyledInteractive", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledInteractive end.*/

    /*Boxophobic.StyledGUI.StyledLayers start.*/
    $m("Boxophobic.StyledGUI.StyledLayers", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"display","pt":$n[0].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"display","t":4,"rt":$n[0].String,"sn":"display"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledLayers end.*/

    /*Boxophobic.StyledGUI.StyledMask start.*/
    $m("Boxophobic.StyledGUI.StyledMask", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].Int32,$n[0].Int32],"pi":[{"n":"file","pt":$n[0].String,"ps":0},{"n":"options","pt":$n[0].String,"ps":1},{"n":"top","pt":$n[0].Int32,"ps":2},{"n":"down","pt":$n[0].Int32,"ps":3}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].String,$n[0].Int32,$n[0].Int32],"pi":[{"n":"display","pt":$n[0].String,"ps":0},{"n":"file","pt":$n[0].String,"ps":1},{"n":"options","pt":$n[0].String,"ps":2},{"n":"top","pt":$n[0].Int32,"ps":3},{"n":"down","pt":$n[0].Int32,"ps":4}],"sn":"$ctor1"},{"a":2,"n":"display","t":4,"rt":$n[0].String,"sn":"display"},{"a":2,"n":"down","t":4,"rt":$n[0].Int32,"sn":"down","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"file","t":4,"rt":$n[0].String,"sn":"file"},{"a":2,"n":"options","t":4,"rt":$n[0].String,"sn":"options"},{"a":2,"n":"top","t":4,"rt":$n[0].Int32,"sn":"top","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledMask end.*/

    /*Boxophobic.StyledGUI.StyledMessage start.*/
    $m("Boxophobic.StyledGUI.StyledMessage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String],"pi":[{"n":"Type","pt":$n[0].String,"ps":0},{"n":"Message","pt":$n[0].String,"ps":1}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].String,$n[0].Single,$n[0].Single],"pi":[{"n":"Type","pt":$n[0].String,"ps":0},{"n":"Message","pt":$n[0].String,"ps":1},{"n":"Top","pt":$n[0].Single,"ps":2},{"n":"Down","pt":$n[0].Single,"ps":3}],"sn":"$ctor1"},{"a":2,"n":"Down","t":4,"rt":$n[0].Single,"sn":"down","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Message","t":4,"rt":$n[0].String,"sn":"message"},{"a":2,"n":"Top","t":4,"rt":$n[0].Single,"sn":"top","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Type","t":4,"rt":$n[0].String,"sn":"type"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledMessage end.*/

    /*Boxophobic.StyledGUI.StyledRangeOptions start.*/
    $m("Boxophobic.StyledGUI.StyledRangeOptions", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String,$n[0].Single,$n[0].Single,$n[0].Array.type(System.String)],"pi":[{"n":"display","pt":$n[0].String,"ps":0},{"n":"min","pt":$n[0].Single,"ps":1},{"n":"max","pt":$n[0].Single,"ps":2},{"n":"options","pt":$n[0].Array.type(System.String),"ps":3}],"sn":"ctor"},{"a":2,"n":"display","t":4,"rt":$n[0].String,"sn":"display"},{"a":2,"n":"max","t":4,"rt":$n[0].Single,"sn":"max","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"min","t":4,"rt":$n[0].Single,"sn":"min","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"options","t":4,"rt":$n[0].Array.type(System.String),"sn":"options"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledRangeOptions end.*/

    /*Boxophobic.StyledGUI.StyledSpace start.*/
    $m("Boxophobic.StyledGUI.StyledSpace", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"space","pt":$n[0].Int32,"ps":0}],"sn":"ctor"},{"a":2,"n":"space","t":4,"rt":$n[0].Int32,"sn":"space","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledSpace end.*/

    /*Boxophobic.StyledGUI.StyledText start.*/
    $m("Boxophobic.StyledGUI.StyledText", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[1].TextAnchor],"pi":[{"n":"alignment","pt":$n[1].TextAnchor,"ps":0}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[1].TextAnchor,$n[0].Single,$n[0].Single],"pi":[{"n":"alignment","pt":$n[1].TextAnchor,"ps":0},{"n":"top","pt":$n[0].Single,"ps":1},{"n":"down","pt":$n[0].Single,"ps":2}],"sn":"$ctor2"},{"a":2,"n":"alignment","t":4,"rt":$n[1].TextAnchor,"sn":"alignment","box":function ($v) { return Bridge.box($v, UnityEngine.TextAnchor, System.Enum.toStringFn(UnityEngine.TextAnchor));}},{"a":2,"n":"down","t":4,"rt":$n[0].Single,"sn":"down","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"text","t":4,"rt":$n[0].String,"sn":"text"},{"a":2,"n":"top","t":4,"rt":$n[0].Single,"sn":"top","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledText end.*/

    /*Boxophobic.StyledGUI.StyledTexturePreview start.*/
    $m("Boxophobic.StyledGUI.StyledTexturePreview", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"displayName","pt":$n[0].String,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"displayName","t":4,"rt":$n[0].String,"sn":"displayName"}]}; }, $n);
    /*Boxophobic.StyledGUI.StyledTexturePreview end.*/

    /*Boxophobic.Utils.SettingsData start.*/
    $m("Boxophobic.Utils.SettingsData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "Data", menuName: "BOXOPHOBIC/Settings Data"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.SpaceAttribute.ctor()],"a":2,"n":"data","t":4,"rt":$n[0].String,"sn":"data"}]}; }, $n);
    /*Boxophobic.Utils.SettingsData end.*/

});
