using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using DG.Tweening;
public class PlayerController : MonoBehaviour
{
    [SerializeField] private Image scopeOverlay;
    [SerializeField] private Vector3 gunMovingPos;
    public BaseGun sniperGun;
    private bool isStartClick = false;
    public bool isInteractive;
    private void Start()
    {
        isInteractive = true;
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            isStartClick = true;
            if (isInteractive)
            {
                isStartClick = false;
                OnScoped();
            }
        }
        if (Input.GetMouseButton(0))
        {
            if (isStartClick && isInteractive)
            {
                OnScoped();
            }


        }
        if (Input.GetMouseButtonUp(0))
        {
            isStartClick = false;

        }
    }
    void OnScoped()
    {
        sniperGun.gameObject.transform.DOLocalMove(gunMovingPos, 0.2f).SetEase(Ease.OutQuart).OnComplete(() =>
         {
             sniperGun.gameObject.SetActive(false);
         });
    }
    void UnScoped()
    {
        Debug.Log("UnScope");
    }
}
