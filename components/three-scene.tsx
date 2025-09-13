"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, geometry: any, material: any, mesh: any

    const init = async () => {
      // Dynamic import for Three.js to avoid SSR issues
      const THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x000000, 0)
      mountRef.current.appendChild(renderer.domElement)

      // Create animated geometry
      geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)

      const isDark = theme === "dark"
      material = new THREE.MeshBasicMaterial({
        color: isDark ? 0x39ff14 : 0x8b4513,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })

      mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      camera.position.z = 30

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate)

        mesh.rotation.x += 0.01
        mesh.rotation.y += 0.01

        renderer.render(scene, camera)
      }

      animate()

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement)
        }
        geometry?.dispose()
        material?.dispose()
        renderer?.dispose()
      }
    }

    init()
  }, [theme])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
}
