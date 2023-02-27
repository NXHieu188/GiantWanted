using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using DG.Tweening;
public class ControllerOnPointer : MonoBehaviour, IDragHandler, IPointerDownHandler, IPointerUpHandler
{
    public Image scopeOverlay;
    [SerializeField] private Vector3 gunMovingPos;
    [SerializeField] private float FOVscoped;
    [SerializeField] private float FOVcache;
    [SerializeField] private float smoothTime;

    [SerializeField] float leftCamBound;
    [SerializeField] float upCamBound;
    [SerializeField] float rightCamBound;
    [SerializeField] float downCamBound;


    public BaseGun sniperGun;
    private bool isStartClick = false;
    [HideInInspector] public bool isShooting = false;
    [HideInInspector] public bool isInteractive;
    [HideInInspector] public bool isCanShoot;
    private Vector3 lastMousePosition;
    private void Start()
    {
        isInteractive = false;
    }
    public void OnPointerDown(PointerEventData eventData)
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isShootLastBullet && !GlobalInstance.Instance.gameManagerInstance.isSetToEnd)
        {
            if (!GlobalInstance.Instance.gameManagerInstance.fistTouch)
            {
                GlobalInstance.Instance.gameManagerInstance.fistTouch = true;
                GlobalInstance.Instance.gameManagerInstance.UnActiveGuide();
            }
            isStartClick = true;
            lastMousePosition = Input.mousePosition;
            if (isInteractive)
            {
                isStartClick = false;
                OnScoped();
            }
        }
    }
    public void OnDrag(PointerEventData eventData) //  cứ di chuyển chuột là gọi
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isShootLastBullet && !GlobalInstance.Instance.gameManagerInstance.isSetToEnd)
        {
            if (isStartClick && isInteractive)
            {
                OnScoped();
            }
            if (!GlobalInstance.Instance.gameManagerInstance.fistTouch)
            {
                GlobalInstance.Instance.gameManagerInstance.fistTouch = true;
                GlobalInstance.Instance.gameManagerInstance.UnActiveGuide();
            }
            var delta = Input.mousePosition - lastMousePosition;
            var velocity = 0.0f;
            delta = delta / Time.deltaTime * Mathf.SmoothDamp(0, 0.007f, ref velocity, smoothTime);

            lastMousePosition = Input.mousePosition;
            Vector3 relativePos = new Vector3(-delta.y, delta.x);
            Vector3 startRotation = GlobalInstance.Instance.gameManagerInstance.mainCamera.transform.eulerAngles;
            Vector3 targetRotation = startRotation + relativePos;

            targetRotation.x = ClampAngle(targetRotation.x, upCamBound, downCamBound);
            targetRotation.y = ClampAngle(targetRotation.y, leftCamBound, rightCamBound);
            GlobalInstance.Instance.gameManagerInstance.mainCamera.transform.rotation = Quaternion.Euler(targetRotation);
        }

    }
    public void OnPointerUp(PointerEventData eventData)
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isShootLastBullet && !GlobalInstance.Instance.gameManagerInstance.isSetToEnd)
        {
            if (isInteractive)
            {
                sniperGun.gameObject.transform.DOKill();
                UnScoped();
            }
        }
    }
    void OnScoped()
    {
        sniperGun.gameObject.transform.DOLocalMove(gunMovingPos, 0.2f).SetEase(Ease.OutQuart).OnComplete(() =>
        {
            sniperGun.gameObject.SetActive(false);
            scopeOverlay.gameObject.SetActive(true);
            GlobalInstance.Instance.gameManagerInstance.mainCamera.DOFieldOfView(FOVscoped, 0.1f);
            sniperGun.gameObject.transform.DOKill();
        });
    }
    void UnScoped()
    {
        GlobalInstance.Instance.gameManagerInstance.mainCamera.DOFieldOfView(FOVcache, 0.1f);
        sniperGun.gameObject.SetActive(true);
        sniperGun.transform.localPosition = new Vector3(1, -2.5f, 1.4f);
        scopeOverlay.gameObject.SetActive(false);
        if (isCanShoot)
        {
            sniperGun.ExploreFx();
            isInteractive = false;
            isCanShoot = false;
            Shooting();
            StartCoroutine(HelperUtility.StartAction(() => { sniperGun.Preparing(); }, 0.25f));
        }
    }
    public static float ClampAngle(float angle, float min, float max)
    {
        float start = (min + max) * 0.5f - 180;
        float floor = Mathf.FloorToInt((angle - start) / 360) * 360;
        min += floor;
        max += floor;
        return Mathf.Clamp(angle, min, max);
    }
    void Shooting()
    {
        isShooting = true;
        sniperGun.FireBullet();
    }
}
