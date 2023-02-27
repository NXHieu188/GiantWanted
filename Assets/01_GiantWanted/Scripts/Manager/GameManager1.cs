using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class GameManager1 : Singleton<GameManager1>
{
    public SoundController soundManager;
    public Camera mainCamera;
    public CameraController cameraController;
    public ControllerOnPointer controllerOnPoint;
    public BaseEnemy baseEnemy;
    public BaseGun baseGun;
    public Transform positionCameraEndHuggyMove;
    [HideInInspector] public bool isShootLastBullet;
    [HideInInspector] public bool isSetToEnd;
    public GameObject house;
    private bool isEndGame;
    [HideInInspector] public bool fistTouch;

    [Header("UI")]
    public GameObject uiEndGame;
    public GameObject guide;


    [Header("Luna Config")]
    [LunaPlaygroundField("HasHouse", 0, "Game Config")]
    public bool isHasHouse;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        controllerOnPoint.sniperGun.Preparing();
        baseEnemy.Init();
        if (isHasHouse)
        {
            house.SetActive(true);
        }
    }
    private void Update()
    {
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallFullGame();
            }
        }
    }
    public void UnActiveGuide()
    {
        guide.SetActive(false);
    }
    public void SetUpWhenShotMissed()
    {
        Luna.Unity.LifeCycle.GameEnded();
        //controllerOnPoint.scopeOverlay.gameObject.SetActive(false);
        //uiEndGame.SetActive(true);
        //isEndGame = true;
    }
    public void SetUpCameraEnd()
    {
        cameraController.isLastShootCamera = false;
        mainCamera.transform.position = new Vector3(positionCameraEndHuggyMove.position.x, positionCameraEndHuggyMove.position.y, positionCameraEndHuggyMove.position.z);
        mainCamera.transform.rotation = Quaternion.Euler(positionCameraEndHuggyMove.rotation.x, positionCameraEndHuggyMove.rotation.y, positionCameraEndHuggyMove.rotation.z);
        mainCamera.fieldOfView = 60;
    }
    public void SetUpToEnd()
    {
        isSetToEnd = true;
        guide.SetActive(false);
        baseEnemy.transform.position = new Vector3(0, 0, 32);
        baseEnemy.transform.DOMove(new Vector3(0, 0, -20), 15);
        Luna.Unity.LifeCycle.GameEnded();
        controllerOnPoint.scopeOverlay.gameObject.SetActive(false);
        baseGun.gun.SetActive(false);
        baseGun.canvasGun.SetActive(false);
        uiEndGame.SetActive(true);
        isEndGame = true;
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
